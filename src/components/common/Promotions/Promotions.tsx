"use client";
import styles from "./Promotions.module.css";
import clsx from "clsx";

import { useForm, SubmitHandler } from "react-hook-form";

import Input from "../../shared/form/input/Input";
import ButtonOrLink from "@/components/shared/button/ButtonOrLink";

import { RegisterProps } from "../../shared/form/input/Input";

function Promotions() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterProps>({
    defaultValues: {
      email: "",
    },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<RegisterProps> = (data) => {
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
          className="big_btns"
          errors={errors}
        />
        <ButtonOrLink type="submit" variant="footer" className="body_text_btns">
          submit
        </ButtonOrLink>
      </form>
    </div>
  );
}

export default Promotions;
