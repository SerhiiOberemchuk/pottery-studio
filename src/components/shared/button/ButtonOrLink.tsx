import Link from "next/link";
import clsx from "clsx";

import styles from "./Button.module.css";

import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  //кнопка
  children?: ReactNode;
  disabled?: boolean;
  variant?: "default" | "dark" | "footer";

  //
  className?: string;
  href?: string;
} & (
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
);

export default function ButtonOrLink({
  //
  type = "button",
  children,
  disabled,
  variant = "default",

  //

  href,
  className,
  //   ...rest,
  ...attrs
}: ButtonProps) {
  const commonClasses = clsx(styles.btn, styles[variant]);

  // зовнішній лінк (інший домен)
  if (href && href.startsWith("http")) {
    return (
      <a
        href={href}
        className={commonClasses}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        target="_blank"
        rel="noopener noreferrer"
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
        className={commonClasses}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  // кнопка
  return (
    <button
      className={commonClasses}
      disabled={disabled}
      {...(attrs as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
