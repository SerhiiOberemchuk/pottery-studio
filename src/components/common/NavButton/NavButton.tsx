"use client";
// import clsx from "clsx";
import styles from "./NavButton.module.css";

import Image from "next/image";
import { useState } from "react";

function NavButton() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <button className={styles.menu__btn} onClick={() => setOpenMenu((prev: boolean) => !prev)}>
      <Image
        src={`./icon/${openMenu ? "btn_close.svg" : "btn_menu.svg"}`}
        width={40}
        height={40}
        alt={"btn"}
      />
    </button>
  );
}

export default NavButton;
