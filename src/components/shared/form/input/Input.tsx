import "./Input.module.css";

import { InputHTMLAttributes } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

export type InputProps = {
  name: string;
  label?: string;
  placeholder: string;
  className?: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  type?: string;
  value?: string;
  id?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
  const {
    name,
    label,
    placeholder,
    type = "text",
    value,
    register,
    id,
    errors,
    disabled,
    ...attrs
  } = props;

  const error = errors[name];

  return (
    <div className="inputWrapper">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        className="input"
        placeholder={placeholder}
        type={type}
        {...(value !== undefined ? { value } : {})}
        {...register(name)}
        aria-describedby={`inputError-${name}`}
        disabled={disabled}
        {...attrs}
      />
      {error && (
          <span
            id={`inputError-${name}`}
            className="inputError"
          >
            {t(String(error?.message))}
          </span>
        )}
    </div>
  );
};

export default Input;
