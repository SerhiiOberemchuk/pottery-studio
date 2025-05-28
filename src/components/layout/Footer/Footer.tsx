import styles from "./footer.module.css";

import Logo from "@/components/common/Logo/Logo";
import Promotions from "@/components/common/Promotions/Promotions";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer___inner">
          <Logo type="footer" />
          <Promotions />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
