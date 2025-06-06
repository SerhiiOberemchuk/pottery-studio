"use client";
import styles from "./Auth.module.css";
import clsx from "clsx";

import Arrow from "./Arrow/Arow";
import Form from "./Form/Form";
import OpenHours from "./OpenHours/OpenHours";
import useAuth from "./useAuth";

import Image from "next/image";

function Auth(type: "signUp" | "logIn") {
  const props = useAuth(type);

  return (
    <div className={clsx(styles.auth)}>
      <div className="container">
        <div className={clsx(styles.auth_inner)}>
          <Arrow />
          <Form {...props} />
          <OpenHours />
          <div className={clsx(styles.auth_image)}>
            <Image src={"/auth/foto_little.jpg"} fill alt="foto auth vaza" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
