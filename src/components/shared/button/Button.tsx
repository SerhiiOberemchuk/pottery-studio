import { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

export type ButtonProps = {
  children?: ReactNode;
  disabled?: boolean;
  variant?: "default" | "dark" | "footer";
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  disabled,
  variant = "default",
  ...attrs
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.btn, styles[variant])}
      disabled={disabled}
      {...attrs}
    >
      {children}
    </button>
  );
}

export default Button;
