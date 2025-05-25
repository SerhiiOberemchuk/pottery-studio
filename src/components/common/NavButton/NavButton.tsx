// import clsx from "clsx";
import styles from "./NavButton.module.css";

import Image from "next/image";

type Props = {
  active: boolean;
  onClick?: () => void;
};

function NavButton({ active, onClick }: Props) {
  return (
    <button className={styles.menu__btn} onClick={onClick}>
      <Image
        src={`./icon/${active ? "btn_close.svg" : "btn_menu.svg"}`}
        width={40}
        height={40}
        alt={"btn"}
      />
    </button>
  );
}

export default NavButton;
