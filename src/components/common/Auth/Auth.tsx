"use client";
import styles from "./Auth.module.css";
import clsx from "clsx";

import Arrow from "./Arrow/Arow";
import Form from "./Form/Form";
import OpenHours from "./OpenHours/OpenHours";
import Picture from "./Picture/Picture";
import useAuth from "./useAuth";

type AuthProps = {
  type: "signUp" | "logIn" | "forgotPassword" | "resetPassword";
};

function Auth({ type }: AuthProps) {
  const props = useAuth(type);

  return (
    <div className={clsx(styles.auth)}>
      <div className="container">
        <div className={clsx(styles.auth_inner)}>
          <Arrow />
          <Form type={type} {...props} />
          <OpenHours isLogIn={type === "logIn" }/>
          <Picture isLogIn={type === "logIn" }/>
        </div>
      </div>
    </div>
  );
}

export default Auth;
