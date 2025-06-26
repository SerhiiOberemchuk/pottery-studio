"use client";
import styles from "./InputPassword.module.css";

import clsx from "clsx";

import { useState, InputHTMLAttributes } from "react";
import { UseFormRegister, FieldErrors, UseFormWatch } from "react-hook-form";

import Image from "next/image";

import { RegisterProps } from "../input/Input";

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
  watch?: UseFormWatch<RegisterProps>;
} & InputHTMLAttributes<HTMLInputElement>;

function InputPassword(props: InputProps) {
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
    watch,
    ...attrs
  } = props;

  const error = errors[name];

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
        type={showPassword ? type : "password"}
        {...register(name, {
          required: "Це поле обов'язкове",
          ...((name === "password" || name === "confirmPassword") && {
            pattern: {
              value:
                // Potterry Studio
                // /^(?=[^A-Z]*[A-Z][^A-Z]*$)(?=(?:[^0-9]*[0-9]){5,10}[^0-9]*$)[A-Z0-9]{6,11}$/,
                // job-tarccker
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=\S)[A-Za-z\d!@#$%^&*]{8,}$/,
              message: "Невірний формат паролю",
            },
          }),
          ...(name === "confirmPassword" &&
            watch && {
              validate: (value) => {
                const password = watch("password");
                return value === password || "Паролі не збігаються";
              },
            }),
        })}
        aria-describedby={`inputError-${name}`}
        disabled={disabled}
        {...attrs}
      />
      <button
        type="button"
        onClick={toggleShowPassword}
        className={clsx(styles.eye)}
      >
        <Image src="/icon/icon_eye.svg" width={20} height={20} alt="eye" />
      </button>

      {error && (
        <span
          id={`inputError-${name}`}
          className={clsx(styles.inputError, "text_helper")}
        >
          {String(error?.message)}
        </span>
      )}
    </div>
  );
}

export default InputPassword;
