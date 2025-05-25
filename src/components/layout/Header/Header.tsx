
import styles from "./header.module.css";

import Logo from "@/components/common/Logo/Logo";
import NavMenu from "@/components/common/NavMenu/NavMenu";
import UserActions from "@/components/common/UserActions/UserActions";
import NavButton from "@/components/common/NavButton/NavButton";

function Header() {
  const 
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <Logo type="header" />
          <NavMenu type="header" />
          <UserActions />
          <NavButton />
          <NavMenu type="mobilemenu"/>
        </div>
      </div>
    </header>
  );
}

export default Header;

// function Header() {
//   return <div className={styles.header}>Header Фдуч</div>;
// }

// export default Header;
