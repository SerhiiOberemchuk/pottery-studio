import styles from "./Separator.module.css";
import clsx from "clsx";

function Separator() {
  return (
    <div className={clsx(styles.separator)}>
      <div className={clsx(styles.separator_text, "body_2")}>or Sign in with</div>
    </div>
  );
}

export default Separator;
