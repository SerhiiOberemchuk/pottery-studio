import clsx from "clsx";
import styles from "./UserActions.module.css";

import Image from "next/image";
import ButtonOrLink from "@/components/shared/button/ButtonOrLink";

type Props = {
  className?: string;
  href?: string;
  onClick?: () => void;
};

function UserActions({ className }: Props) {
  return (
    <nav className={clsx(styles.userActions, className)}>
      <ul className={styles.userActions_list}>
        <ActionsButton src="./icon/btn_search.svg" alt="search" />
        <ActionsButton src="./icon/btn_login.svg" href="/log_in" alt="login" />
        <ActionsButton src="./icon/btn_basket.svg" href="/forgot_password" alt="basket" />
      </ul>
    </nav>
  );
}

export default UserActions;

type PropsLink = {
  src: string;
  href?: string;
  alt: string;
} & Pick<Props, "onClick">;

function ActionsButton({ src, href, alt }: PropsLink) {
  return (
    <li className={styles.userActions_item}>
      <ButtonOrLink href={href}>
        <Image src={src} width={36} height={36} alt={alt} />
      </ButtonOrLink>
    </li>
  );
}
