"use client";
import styles from "./Auth.module.css";
import clsx from "clsx";

import ButtonOrLink from "@/components/shared/button/ButtonOrLink";
import Image from "next/image";
import TitleSection from "@/components/ui/TitleSection/TitleSection";
import SubtitleSection from "@/components/ui/SubtitleSection/SubtitleSection";

import Input from "@/components/shared/form/input/Input";
import InputPassword from "@/components/shared/form/inputPassword/InputPassword";
import Checkbox from "@/components/shared/form/checkbjx/Checkbox";
import Separator from "@/components/shared/separator/Separatop";

import { useForm, SubmitHandler } from "react-hook-form";

import { RegisterProps } from "@/components/shared/form/input/Input";
import { CheckboxRegisterProps } from "@/components/shared/form/checkbjx/Checkbox";

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
  } = useForm<RegisterProps & CheckboxRegisterProps>({
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
            <form
              className={clsx(styles.auth_form_field)}
              onSubmit={handleSubmit(onSubmit)}
            >
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
                label="Email *"
              />
              <InputPassword
                key="password"
                id="password"
                name="password"
                placeholder={"Password *"}
                variant="auth"
                type="text"
                register={register}
                className=""
                errors={errors}
                label="Password *"
              />
              <InputPassword
                key="confirmPassword"
                id="confirmPassword"
                name="confirmPassword"
                placeholder={"Confirm password *"}
                variant="auth"
                type="text"
                register={register}
                className=""
                errors={errors}
                label="Confirm password *"
              />

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
                label="Name"
              />

              <Checkbox
                key="privacy_policy"
                id="privacy_policy"
                name="privacy_policy"
                variant="auth"
                register={register}
                className=""
                errors={errors}
                label={
                  <p className={clsx(styles.privacy_policy)}>
                    I have been able to read and understand the information on
                    the use of my personal data explained in the{" "}
                    <ButtonOrLink href="/">Privacy policy*</ButtonOrLink>
                  </p>
                }
              />
              <Checkbox
                key="news"
                id="news"
                name="news"
                variant="auth"
                register={register}
                className=""
                errors={errors}
                label={
                  <p className={clsx(styles.privacy_policy)}>
                    I want to receive news and customised commercial
                    communications from of Pottery Studio via email and other
                    means
                  </p>
                }
              />
              <ButtonOrLink type="submit" variant="dark">
                Create account
              </ButtonOrLink>
            </form>
            {/*  */}
            <Separator />
            {/*  */}
            <div className={clsx(styles.auth_social_buttons)}>
              <ButtonOrLink type="button" variant="white">
                <Image
                  src={"/icon/icon_google.svg"}
                  width={28}
                  height={28}
                  alt="Google"
                />
                <span>Log in with Google</span>
              </ButtonOrLink>

              <ButtonOrLink type="button" variant="white">
                <Image
                  src={"/icon/icon_facebook.svg"}
                  width={28}
                  height={28}
                  alt="Google"
                />
                <span>Log in with Facebook</span>
              </ButtonOrLink>
            </div>
          </div>
          <div className={clsx(styles.auth_open_hours)}>
            <SubtitleSection>Working hours</SubtitleSection>
            <TitleSection>Open hours</TitleSection>
          </div>
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
