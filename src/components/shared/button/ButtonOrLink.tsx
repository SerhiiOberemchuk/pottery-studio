import Link from "next/link";
import clsx from "clsx";
import styles from "./Button.module.css";
import {
  MouseEventHandler,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";

type Props = {
  href?: string;
  className?: string;
  variant?: "default" | "white" | "dark" | "footer";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ButtonOrLink({
  href,
  className,
  variant = "default",
  disabled,
  children,
  ...attrs
}: Props) {
  const btnClasses = clsx(styles.btn, styles[variant], className);
  const linkClasses = clsx(className);

  // зовнішній лінк (інший домен)
  if (href && href.startsWith("http")) {
    return (
      <a
        href={href}
        className={btnClasses}
        {...(attrs as AnchorHTMLAttributes<HTMLAnchorElement>)}
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        onClick={disabled ? (e) => e.preventDefault() : attrs.onClick}
      >
        {children}
      </a>
    );
  }

  // внутрішній лінк через Next.js
  if (href) {
    return (
      <Link
        href={href}
        className={linkClasses}
        {...(attrs as AnchorHTMLAttributes<HTMLAnchorElement>)}
        aria-disabled={disabled}
        onClick={disabled ? (e) => e.preventDefault() : attrs.onClick}
      >
        {children}
      </Link>
    );
  }

  // Button
  return (
    <button
      className={btnClasses}
      disabled={disabled}
      {...(attrs as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
