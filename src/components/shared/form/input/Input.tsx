import styles from "./Input.module.css";

import clsx from "clsx";

import { InputHTMLAttributes } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

export type InputProps = {
  id?: string;
  name: string;
  label?: string;
  variant?: "default" | "search" | "footer";
  placeholder: string;
  type?: string;
  register: UseFormRegister<{ email: string }>; // alex
  className?: string;
  errors: FieldErrors;
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
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        className={clsx(styles.input, styles[variant], className)}
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
