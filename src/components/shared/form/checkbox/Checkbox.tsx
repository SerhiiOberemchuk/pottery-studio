import styles from "./Checkbox.module.css";
import clsx from "clsx";
import { InputHTMLAttributes } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import Image from "next/image";

export type CheckboxRegisterProps = {
  rememberMe?: boolean;
  privacyPolicy?: boolean;
  news?: boolean;
};

export type CheckboxProps = {
  id?: string;
  name: keyof CheckboxRegisterProps;
  label?: React.ReactNode | string;
  variant?: "default" | "auth";
  register: UseFormRegister<CheckboxRegisterProps>;
  className?: string;
  errors: FieldErrors<CheckboxRegisterProps>;
} & InputHTMLAttributes<HTMLInputElement>;

function Checkbox(props: CheckboxProps) {
  const {
    id,
    name,
    label,
    variant = "default",
    register,
    className,
    errors,
    disabled,
    ...attrs
  } = props;

  const error = errors[name];

  return (
    <div className={clsx(styles.checkboxWrapper)}>
      <input
        id={id}
        className={clsx(
          styles.checkbox,
          styles[`${variant}_checkbox`],
          className
        )}
        type="checkbox"
        {...register(name, {
          ...(name === "privacyPolicy" && {
            required: "Це поле обов'язкове *",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Надайте згоду",
            },
          }),
        })}
        aria-describedby={`checkboxError-${name}`}
        disabled={disabled}
        {...attrs}
      />

      <div className={clsx(styles.checkmark)}>
        <Image
          src={"/icon/icon_checkbox.svg"}
          width={12}
          height={9}
          alt="foto auth vaza"
        />
      </div>

      {label && (
        <label
          htmlFor={id}
          className={clsx(styles.label, styles[`${variant}_label`], className)}
        >
          {label}
        </label>
      )}

      {error && (
        <span
          id={`checkboxError-${name}`}
          className={clsx(styles.checkboxError, "text_helper")}
        >
          {String(error?.message)}
        </span>
      )}
    </div>
  );
}

export default Checkbox;
