import clsx from "clsx";
import styles from "./NavMenu.module.css";

import Link from "next/link";

type Props = {
  className?: string;
  type: "header" | "mobilemenu" | "footer";
  onClick?: () => void;
};

function NavMenu({ className = "", type, onClick }: Props) {
  return (
    <nav className={clsx(styles.menu, styles[type], styles[className])}>
      <ul className={clsx(styles.menu__list, styles[type])}>
        <NavLink onClick={onClick} href="/" type={type} linkName="HOME" />
        <NavLink onClick={onClick} href="/about" type={type} linkName="ABOUT" />

        <NavLink onClick={onClick} href="/shop" type={type} linkName="SHOP" />

        <NavLink
          onClick={onClick}
          href="/book_classes"
          type={type}
          linkName="BOOK CLASSES"
        />
        <NavLink
          onClick={onClick}
          href="/open_hours"
          type={type}
          linkName="OPEN HOURS"
        />
        <NavLink
          onClick={onClick}
          href="/contacts"
          type={type}
          linkName="CONTACTS"
        />
      </ul>
    </nav>
  );
}

export default NavMenu;

type PropsLink = {
  href: string;
  linkName: string;
} & Pick<Props, "type" | "onClick">;

function NavLink({ href, linkName, type }: PropsLink) {
  return (
    <li className={styles.menu__item}>
      <Link
        href={href}
        className={clsx(styles.menu__link, styles[type], "big_btns")}
      >
        {linkName}
      </Link>
    </li>
  );
}
