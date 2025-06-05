import styles from "./Checkbox.module.css";

import clsx from "clsx";

import { InputHTMLAttributes } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

export type RegisterProps = {
  email?: string;
  name?: string;
  password?: string;
  confirmPassword?: string;
};

export type CheckboxProps = {
  id?: string;
  name: keyof RegisterProps;
  label?: string;
  variant?: "default" | "auth";
  placeholder: string;
  register: UseFormRegister<RegisterProps>;
  className?: string;
  errors: FieldErrors<RegisterProps>;
} & InputHTMLAttributes<HTMLInputElement>;

function Checkbox(props: CheckboxProps) {
  const {
    id,
    name,
    label,
    placeholder,
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
        className={clsx(styles.radio, styles[`${variant}_checkbox`], className)}
        placeholder={placeholder}
        type="checkbox"
        {...register(name)}
        aria-describedby={`checkboxError-${name}`}
        disabled={disabled}
        {...attrs}
      />
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
          className={clsx(styles.inputError, "text_helper")}
        >
          {/* {String(error?.message)} */}
          The field is required *
        </span>
      )}
    </div>
  );
}

export default Checkbox;
