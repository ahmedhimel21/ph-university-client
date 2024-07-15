import { Button } from "antd";
import { SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";
import authApi from "../../redux/features/auth/authEndpoints";

type TInputs = {
  id: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login, { error }] = authApi.useLoginMutation();
  console.log("error =>", error);

  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    console.log(data);
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
      <PHForm onSubmit={onSubmit}>
        <PHInput type="text" name="id" label="ID:"></PHInput>
        <PHInput type="text" name="password" label="Password:"></PHInput>
        <Button htmlType="submit">Submit</Button>
      </PHForm>
    </div>
  );
};

export default Login;
