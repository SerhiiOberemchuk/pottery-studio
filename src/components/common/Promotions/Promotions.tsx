"use client";
import styles from "./Promotions.module.css";

import Input from "../../shared/form/input/Input";
import Button from "@/components/shared/button/Button";
import { useForm } from "react-hook-form";
import clsx from "clsx";

function Promotions() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: { email: string }) => {
    console.log("email", data);
    reset();
  };
  return (
    <div className={clsx(styles.promotions__form)}>
      <h4 className={clsx(styles.form__title)}>
        Sign up to receive updates and promotions
      </h4>
      <form className={clsx(styles.form)} onSubmit={handleSubmit(onSubmit)}>
        <Input
          key="email"
          id="email"
          name="email"
          placeholder={"Написати повідомлення"}
          variant="footer"
          type="text"
          register={register}
          className=""
          errors={errors}
        />
        <Button type="submit" variant="footer">
          submit
        </Button>
      </form>
    </div>
  );
}

export default Promotions;
