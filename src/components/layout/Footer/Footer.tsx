import styles from "./footer.module.css";
import clsx from "clsx";

import Logo from "@/components/common/Logo/Logo";
import Promotions from "@/components/common/Promotions/Promotions";
import NavMenu from "@/components/common/NavMenu/NavMenu";
import FollowUs from "@/components/common/FollowUs/FollowUs";
import Copyright from "@/components/common/Сopyright/Сopyright";

function Footer() {
  return (
    <footer className={clsx(styles.footer)}>
      <div className="container">
        <div className={clsx(styles.footer_inner)}>
          <div className={clsx(styles.footer_logo)}>
            <Logo type="footer" />
            <div className={clsx(styles.footer_big)}>
              <Copyright />
            </div>
          </div>

          <div className={clsx(styles.footer_big)}>
            <NavMenu type="footer" />
          </div>

          <div className={clsx(styles.footer_medium)}>
            <Promotions />
            <div className={clsx(styles.footer_small)}>
              <NavMenu type="footer" />
            </div>
            <FollowUs />
          </div>

          <div className={clsx(styles.footer_small)}>
            <Copyright />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
