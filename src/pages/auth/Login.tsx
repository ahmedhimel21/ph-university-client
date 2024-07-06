import { Button } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authEndpoints";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type TInputs = {
  id: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<TInputs>();
  const dispatch = useAppDispatch();

  const [login, { error }] = useLoginMutation();
  console.log("error =>", error);

  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    const toastId = toast.loading("login in-progress ");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const { accessToken } = res.data;
      const user = jwtDecode(accessToken);
      dispatch(setUser({ user: user, token: accessToken }));
      toast.success("logged in successfully!", { duration: 2000, id: toastId });
      navigate("/");
    } catch (err) {
      toast.error("Something went wrong", { duration: 2000, id: toastId });
    }
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            placeholder="UserID"
            {...register("id")}
            defaultValue="A-0001"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            {...register("password")}
            defaultValue="admin@123"
          />
        </div>
        <Button htmlType="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
