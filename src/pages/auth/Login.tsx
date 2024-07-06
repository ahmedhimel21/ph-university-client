import { Button } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authEndpoints";

type TInputs = {
  id: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<TInputs>();

  const [login, { data, error }] = useLoginMutation();

  console.log("error =>", error);
  console.log("data =>", data);

  const onSubmit: SubmitHandler<TInputs> = (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    login(userInfo);
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
