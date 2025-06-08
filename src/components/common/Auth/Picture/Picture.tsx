import styles from "./Picture.module.css";
import clsx from "clsx";

// import ButtonOrLink from "@/components/shared/button/ButtonOrLink";
import Image from "next/image";

function Picture() {
  return (
    <div className={clsx(styles.auth_image)}>
      <Image src={"/auth/foto_little.jpg"} fill alt="foto auth vaza" />
    </div>
  );
}

export default Picture;
