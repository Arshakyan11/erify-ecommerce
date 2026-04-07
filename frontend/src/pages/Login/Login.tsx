import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";
import {
  registrationValidation,
  type RegistrationValidationType,
} from "../../forms/registration_schema";
import { zodResolver } from "@hookform/resolvers/zod";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationValidationType>({
    resolver: zodResolver(registrationValidation),
  });

  const onSubmit = (data: RegistrationValidationType) => {};
  return (
    <section className={styles.login}>
      <div className={styles.container}>
        <div className={styles.login_content}>
          <div className={styles.login_left}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Write Your Name"
                {...register("firstName")}
              />
              <input
                type="text"
                placeholder="Write LastName"
                {...register("lastName")}
              />
              <input
                type="email"
                placeholder="Write email"
                {...register("email")}
              />
              <input
                type="text"
                placeholder="Write phoneNUmber"
                {...register("phoneNumber")}
              />

              <input
                type="text"
                placeholder="Write password"
                {...register("password")}
              />
              <input
                type="text"
                placeholder="Write password"
                {...register("confirmPassword")}
              />
            </form>
          </div>
          <div className={styles.login_right}></div>
        </div>
      </div>
    </section>
  );
};

export default Login;
