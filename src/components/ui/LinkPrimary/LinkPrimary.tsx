import Link from "next/link";
import styles from "./link-primary.module.css";
import clsx from "clsx";

type Props = { href: string; className?: string; children?: React.ReactNode };

function LinkPrimary({ href, children, className }: Props) {
  return (
    <Link
      href={href}
      className={clsx("body_text_btns", styles.link_primary, className)}
    >
      {children}
    </Link>
  );
}

export default LinkPrimary;
