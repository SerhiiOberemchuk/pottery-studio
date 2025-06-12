import styles from "./Сopyright.module.css";
import clsx from "clsx";
import Link from "next/link";

function Copyright() {
  const currentYear: number = new Date().getFullYear();
  return (
    <div className={clsx(styles.copyright)}>
      <p className={clsx(styles.copyright_text, "body_2")}>
        <Link href="#">{currentYear} © All rights reserved</Link>
      </p>
    </div>
  );
}

export default Copyright;
