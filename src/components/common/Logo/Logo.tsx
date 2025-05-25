import clsx from "clsx";

import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

type Props = { className?: string; type: "header" | "footer" };

function Logo({ className, type }: Props) {
  return (
    <Link href={"/"} className={clsx(styles.logo, className)}>
      <Image
        src={`logo/logo_${type}.svg`}
        width={72}
        height={72}
        alt="Посилання на головну сторінку"
      />
    </Link>
  );
}

export default Logo;
