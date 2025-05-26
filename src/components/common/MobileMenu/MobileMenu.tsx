"use client";
import { useState } from "react";

import NavButton from "../NavButton/NavButton";
import NavMenu from "../NavMenu/NavMenu";

function MobileMenu() {
  const [active, setActive] = useState<boolean>(false);
  return (
    <>
      <NavButton active={active} onClick={() => setActive((prev) => !prev)} />
      <NavMenu
        type="mobilemenu"
        className={active ? "active" : ""}
        onClick={() => setActive(false)}
      />
    </>
  );
}

export default MobileMenu;
