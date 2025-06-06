import { useForm, SubmitHandler } from "react-hook-form";

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

function Form() {
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

        <div className={clsx(styles.form_checkbox)}>
          <Checkbox
            key="privacyPolicy"
            id="privacyPolicy"
            name="privacyPolicy"
            variant="auth"
            register={register}
            className=""
            errors={errors}
            label={
              <p className={clsx(styles.privacy_policy)}>
                I have been able to read and understand the information on the
                use of my personal data explained in the{" "}
                <Link href="/">Privacy policy*</Link>
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
                I want to receive news and customised commercial communications
                from of Pottery Studio via email and other means
              </p>
            }
          />
        </div>
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
  );
}

export default Form;
