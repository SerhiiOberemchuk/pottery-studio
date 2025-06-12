"use client";
import { useState } from "react";
import styles from "./MobileMenu.module.css"

import NavButton from "../NavButton/NavButton";
import NavMenu from "../NavMenu/NavMenu";

function MobileMenu() {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className={styles.mobile_menu}>
      <NavButton active={active} onClick={() => setActive((prev) => !prev)} />
      <NavMenu
        type="mobilemenu"
        className={active ? "active" : ""}
        onClick={() => setActive(false)}
      />
    </div>
  );
}

export default MobileMenu;
