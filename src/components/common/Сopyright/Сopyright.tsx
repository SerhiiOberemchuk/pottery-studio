import styles from "./Сopyright.module.css";
import clsx from "clsx";
import ButtonOrLink from "@/components/shared/button/ButtonOrLink";

function Copyright() {
  const currentYear: number = new Date().getFullYear();
  return (
    <div className={clsx(styles.copyright)}>
      <ButtonOrLink href="#" aria-label="All rights reserved">
        <p className={clsx(styles.copyright_text, "body_2")}>
          {currentYear} © All rights reserved
        </p>
      </ButtonOrLink>
    </div>
  );
}

export default Copyright;
