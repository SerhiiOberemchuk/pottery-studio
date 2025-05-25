"use client";
import styles from "./header.module.css";

import Logo from "@/components/common/Logo/Logo";
import NavMenu from "@/components/common/NavMenu/NavMenu";
import UserActions from "@/components/common/UserActions/UserActions";
import NavButton from "@/components/common/NavButton/NavButton";
import { useState } from "react";

function Header() {
  const [active, setActive] = useState<boolean>(false);
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <Logo type="header" />
          <NavMenu type="header" />
          <UserActions />
          <NavButton
            active={active}
            onClick={() => setActive((prev) => !prev)}
          />
          <NavMenu type="mobilemenu" className={active ? "active" : ""} />
        </div>
      </div>
    </header>
  );
}

export default Header;
