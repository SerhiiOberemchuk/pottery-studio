import styles from "./Input.module.css";

import clsx from "clsx";

import { InputHTMLAttributes } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

export type RegisterProps = {
  email?: string;
  name?: string;
  password?: string;
  confirmPassword?: string;
};

export type InputProps = {
  id?: string;
  name: keyof RegisterProps;
  label?: string;
  variant?: "default" | "search" | "footer" | "auth";
  placeholder: string;
  type?: string;
  register: UseFormRegister<RegisterProps>;
  className?: string;
  errors: FieldErrors<RegisterProps>;
} & InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps) {
  const {
    id,
    name,
    label,
    placeholder,
    variant = "default",
    type = "text",
    register,
    className,
    errors,
    disabled,
    ...attrs
  } = props;

  const error = errors[name];

  return (
    <div className={clsx(styles.inputWrapper)}>
      {label && (
        <label
          htmlFor={id}
          className={clsx(styles.label, styles[`${variant}_label`], className)}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={clsx(styles.input, styles[`${variant}_input`], className)}
        placeholder={placeholder}
        type={type}
        {...register(name as "email")}
        aria-describedby={`inputError-${name}`}
        disabled={disabled}
        {...attrs}
      />
      {error && (
        <span
          id={`inputError-${name}`}
          className={clsx(styles.inputError, "text_helper")}
        >
          {String(error?.message)}
          {/* The field is required * */}
        </span>
      )}
    </div>
  );
}

export default Input;
