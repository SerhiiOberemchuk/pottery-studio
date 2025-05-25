import clsx from "clsx";
import styles from "./UserActions.module.css";

import Image from "next/image";

type Props = {
  className?: string;
  onClick?: () => void;
};

function UserActions({ className }: Props) {
  return (
    <nav className={clsx(styles.userActions, className)}>
      <ul className={styles.userActions__list}>
        <ActionsButton src="./icon/btn_search.svg" alt="search" />
        <ActionsButton src="./icon/btn_login.svg" alt="login" />
        <ActionsButton src="./icon/btn_basket.svg" alt="basket" />
      </ul>
    </nav>
  );
}

export default UserActions;

type PropsLink = {
  src: string;
  alt: string;
} & Pick<Props, "onClick">;

function ActionsButton({ src, alt }: PropsLink) {
  return (
    <li className={styles.userActions__item}>
      <button type="button">
        <Image src={src} width={36} height={36} alt={alt} />
      </button>
    </li>
  );
}
