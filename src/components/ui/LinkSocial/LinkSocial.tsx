import Image from "next/image";
import { ReactNode } from "react";
// import styles from "./LinkSocial.module.css";

type Props = {
  children?: ReactNode;
  href: string;
  src?: string;
  alt: string;
  className?: string;
};

function LinkSocial({ children, href, src, alt, className }: Props) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Посилання на сторінку інстаграм"
      href={href}
      className={className}
    >
      {src ? (
        <Image src={`icon/${src}`} width={32} height={32} alt={alt} />
      ) : null}
      {children}
    </a>
  );
}

export default LinkSocial;
