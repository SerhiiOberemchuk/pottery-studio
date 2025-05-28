import styles from "./header.module.css";

import Logo from "@/components/common/Logo/Logo";
import NavMenu from "@/components/common/NavMenu/NavMenu";
import UserActions from "@/components/common/UserActions/UserActions";
import MobileMenu from "@/components/common/MobileMenu/MobileMenu";

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <Logo type="header" />
          <NavMenu type="header" />
          <UserActions />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
