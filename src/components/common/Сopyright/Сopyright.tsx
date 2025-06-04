import styles from "./Сopyright.module.css";
import clsx from "clsx";
import LinkSocial from "@/components/ui/LinkSocial/LinkSocial";

function Copyright() {
  const currentYear: number = new Date().getFullYear();
  return (
    <div className={clsx(styles.copyright)}>
      <LinkSocial href="#" alt="">
        <p className={clsx(styles.copyright_text, "body_2")}>
          {currentYear} © All rights reserved
        </p>
      </LinkSocial>
    </div>
  );
}

export default Copyright;
