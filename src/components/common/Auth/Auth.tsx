"use client";
import styles from "./Auth.module.css";
import clsx from "clsx";

import Arrow from "./Arrow/Arow";
import Form from "./Form/Form";
import OpenHours from "./OpenHours/OpenHours";

import Image from "next/image";

function Auth(type: "signUp" | "logIn" | "forgotPassword" | "resetPassword") {
  console.log("Auth", type);

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm<RegisterProps & CheckboxRegisterProps>({
  //   defaultValues: {
  //     email: "",
  //   },
  //   mode: "onBlur",
  // });

  // const onSubmit: SubmitHandler<RegisterProps> = (data) => {
  //   console.log("email", data);
  //   reset();
  // };

  return (
    <div className={clsx(styles.auth)}>
      <div className="container">
        <div className={clsx(styles.auth_inner)}>
          <Arrow />
          <Form />
          <OpenHours />

          {/*  */}
          <div className={clsx(styles.auth_image)}>
            <Image src={"/auth/foto_little.jpg"} fill alt="foto auth vaza" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
