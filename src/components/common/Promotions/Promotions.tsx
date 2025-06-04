"use client";
import styles from "./Promotions.module.css";

import Input from "../../shared/form/input/Input";
import ButtonOrLink from "@/components/shared/button/ButtonOrLink";
import { useForm, SubmitHandler } from "react-hook-form";
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

  const onSubmit: SubmitHandler<{ email: string }> = (data) => {
    console.log("email", data);
    reset();
  };
  return (
    <div className={clsx(styles.promotions_form)}>
      <h4 className={clsx(styles.form_title)}>
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
        <ButtonOrLink type="submit" variant="footer">
          submit
        </ButtonOrLink>
      </form>
    </div>
  );
}

export default Promotions;
