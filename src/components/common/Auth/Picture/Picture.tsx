import styles from "./Picture.module.css";
import clsx from "clsx";

import ButtonOrLink from "@/components/shared/button/ButtonOrLink";
import Image from "next/image";

type Props = {
  isLogIn: boolean;
};

function Picture({ isLogIn }: Props) {
  return (
    <div className={clsx(styles.auth_picture)}>
      <Image
        className={clsx(styles.auth_picture_img)}
        src={`/auth/${isLogIn ? `foto_little_2.jpg` : `foto_little_1.jpg`}`}
        fill
        alt="foto auth vaza"
      />
      {isLogIn ? (
        <div className={clsx(styles.auth_image_btn)}>
          <ButtonOrLink href="/sign_up" variant="white" className="body_text_btns">
            Create account
          </ButtonOrLink>
          <ButtonOrLink href="/sign_up" variant="white" className="body_text_btns">
            Continue as a guest
          </ButtonOrLink>
        </div>
      ) : null}
    </div>
  );
}

export default Picture;
