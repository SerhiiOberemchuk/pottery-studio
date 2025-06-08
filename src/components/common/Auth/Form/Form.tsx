"use client";
import {
  SubmitHandler,
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";

import styles from "./Form.module.css";
import clsx from "clsx";

import TitleSection from "@/components/ui/TitleSection/TitleSection";
import Input from "@/components/shared/form/input/Input";
import InputPassword from "@/components/shared/form/inputPassword/InputPassword";
import Checkbox from "@/components/shared/form/checkbjx/Checkbox";
import ButtonOrLink from "@/components/shared/button/ButtonOrLink";
import Separator from "@/components/shared/separator/Separatop";
import Image from "next/image";
import Link from "next/link";

import { RegisterProps } from "@/components/shared/form/input/Input";
import { CheckboxRegisterProps } from "@/components/shared/form/checkbjx/Checkbox";

type FormProps = {
  register: UseFormRegister<RegisterProps & CheckboxRegisterProps>;
  handleSubmit: UseFormHandleSubmit<RegisterProps & CheckboxRegisterProps>;
  errors: FieldErrors<RegisterProps & CheckboxRegisterProps>;
  onSubmit: SubmitHandler<RegisterProps & CheckboxRegisterProps>;
  type: "signUp" | "logIn" | "forgotPassword" | "resetPassword";
};

function Form({ register, handleSubmit, errors, onSubmit, type }: FormProps) {
  const isSignUpPage = type === "signUp";
  const isLogInPage = type === "logIn";
  const isForgotPasswordPage = type === "forgotPassword";
  const isResetPasswordPage = type === "resetPassword";
  console.log("ee", type);

  const authTitle = () => {
    switch (type) {
      case "logIn":
        return "Welcome!";
      case "signUp":
        return "New customer";
      case "forgotPassword":
      case "resetPassword":
        return "Reset password";

      default:
        return "";
    }
  };

  const authSubTitle = () => {
    switch (type) {
      case "logIn":
        return "Log in to your account";
      case "signUp":
        return "Create account";
      case "forgotPassword":
        return "We will send you an email to reset your password";
      case "resetPassword":
        return "Enter a new password";

      default:
        return "";
    }
  };

  const buttonTitle = () => {
    switch (type) {
      case "logIn":
        return "Sign up";
      case "signUp":
        return "Create account";
      case "forgotPassword":
        return "submit";
      case "resetPassword":
        return "Reset password";

      default:
        return "";
    }
  };

  return (
    <div className={clsx(styles.auth_form)}>
      <TitleSection>{authTitle()}</TitleSection>
      <p className={clsx(styles.auth_form_sub_title, styles[type], "subtitle")}>
        {authSubTitle()}
      </p>
      <form
        className={clsx(styles.auth_form_field, styles[type])}
        onSubmit={handleSubmit(onSubmit)}
      >
        {!isResetPasswordPage ? (
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
        ) : null}

        {!isForgotPasswordPage ? (
          <div>
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
            {isLogInPage ? (
              <div
                className={clsx(styles.auth_form_forgot_link, "text_helper")}
              >
                <Link href="/forgot_password">Forgot password?</Link>
                <span>* required</span>
              </div>
            ) : null}
          </div>
        ) : null}

        {isSignUpPage || isResetPasswordPage ? (
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
        ) : null}

        {isSignUpPage ? (
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
        ) : null}

        {isLogInPage || isSignUpPage ? (
          <div className={clsx(styles.form_checkbox, styles[type])}>
            <Checkbox
              key={isSignUpPage ? "privacyPolicy" : "rememberMe"}
              id={isSignUpPage ? "privacyPolicy" : "rememberMe"}
              name={isSignUpPage ? "privacyPolicy" : "rememberMe"}
              variant="auth"
              register={register}
              className=""
              errors={errors}
              label={
                <p className={clsx(styles.privacy_policy)}>
                  <Link href={isSignUpPage ? "/" : "/forgot_password"}>
                    {isSignUpPage
                      ? "I have been able to read and understand the information on the use of my personal data explained in the "
                      : "Remember me baby"}

                    <span>{isSignUpPage ? "Privacy policy*" : null}</span>
                  </Link>
                </p>
              }
            />
            {isSignUpPage ? (
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
            ) : null}
          </div>
        ) : null}

        <ButtonOrLink type="submit" variant="dark" className="body_text_btns">
          {buttonTitle()}
        </ButtonOrLink>
      </form>

      {isLogInPage || isSignUpPage ? (
        <>
          <Separator/>

          <div className={clsx(styles.auth_social_buttons)}>
            <ButtonOrLink type="button" variant="white" className="big_btns">
              <Image
                src={"/icon/icon_google.svg"}
                width={28}
                height={28}
                alt="Google"
              />
              <span>Log in with Google</span>
            </ButtonOrLink>

            <ButtonOrLink type="button" variant="white" className="big_btns">
              <Image
                src={"/icon/icon_facebook.svg"}
                width={28}
                height={28}
                alt="Google"
              />
              <span>Log in with Facebook</span>
            </ButtonOrLink>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Form;
