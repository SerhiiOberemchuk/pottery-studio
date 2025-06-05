"use client";
import styles from "./Auth.module.css";
import clsx from "clsx";

import ButtonOrLink from "@/components/shared/button/ButtonOrLink";
import Image from "next/image";
import TitleSection from "@/components/ui/TitleSection/TitleSection";
import SubtitleSection from "@/components/ui/SubtitleSection/SubtitleSection";
import Input from "@/components/shared/form/input/Input";
import { useForm, SubmitHandler } from "react-hook-form";

// import "../../../../public/icon/btn_arrrow_right.svg"

type Props = {
  type: "signUp" | "logIn" | "forgotPassword" | "resetPassword";
};

function Auth({ type }: Props) {
  console.log("Auth", type);

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
    <div className={clsx(styles.auth)}>
      <div className="container">
        <div className={clsx(styles.auth_inner)}>
          {/*  */}
          <div className={clsx(styles.auth_arrow)}>
            <ButtonOrLink href="/">
              <Image
                src="/icon/btn_arrrow_right.svg"
                width={40}
                height={40}
                alt="arrow"
              />
            </ButtonOrLink>
          </div>
          {/*  */}
          <div className={clsx(styles.auth_form)}>
            <TitleSection>New customer</TitleSection>
            <p className="auth_form_sub_title subtitle">Create account</p>
            <form className={clsx(styles.auth_form_field)} onSubmit={handleSubmit(onSubmit)}>
              <Input
                key="email"
                id="email"
                name="email"
                placeholder={"Email *"}
                variant="auth"
                type="text"
                register={register}
                className=""
                errors={errors}
                label="email *"
              />
              {/* <Input
                key="email"
                id="email"
                name="email"
                placeholder={"Написати повідомлення"}
                variant="auth"
                type="text"
                register={register}
                className=""
                errors={errors}
                label="email"
              />
              <Input
                key="email"
                id="email"
                name="email"
                placeholder={"Написати повідомлення"}
                variant="auth"
                type="text"
                register={register}
                className=""
                errors={errors}
                label="email"
              /> */}
              <Input
                key="name"
                id="name"
                name="name"
                placeholder={"Name"}
                variant="auth"
                type="text"
                register={register}
                className=""
                errors={errors}
                label="name"
              />
              <ButtonOrLink type="submit" variant="dark">
                submit
              </ButtonOrLink>
            </form>
          </div>
          <div className={clsx(styles.auth_open_hours)}>
            <SubtitleSection>Working hours</SubtitleSection>
            <TitleSection>Open hours</TitleSection>
          </div>
          {/*  */}
          <div className={clsx(styles.auth_image)}>
            <Image
              src={"/auth/foto_little.jpg"}
              width={252}
              height={312}
              alt="foto auth vaza"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
