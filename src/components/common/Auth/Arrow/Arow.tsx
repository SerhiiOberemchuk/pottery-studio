import styles from "./Arrow.module.css";
import clsx from "clsx";

import ButtonOrLink from "@/components/shared/button/ButtonOrLink";
import Image from "next/image";

function Arrow() {
  return (
    <div className={clsx(styles.auth_arrow)}>
      <ButtonOrLink href="/">
        <Image
          src="/icon/btn_arrrow_right.svg"
          width={40}
          height={40}
          alt="arrow"
        />
      </ButtonOrLink>
    </div>
  );
}

export default Arrow;
