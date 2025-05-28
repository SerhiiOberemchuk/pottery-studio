import styles from "./footer.module.css";
import clsx from "clsx";

import Logo from "@/components/common/Logo/Logo";
import Promotions from "@/components/common/Promotions/Promotions";
import NavMenu from "@/components/common/NavMenu/NavMenu";

function Footer() {
  return (
    <footer className={clsx(styles.footer)}>
      <div className="container">
        <div className={clsx(styles.footer___inner)}>
          <Logo type="footer" />
          <Promotions />
          <NavMenu type="footer" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
