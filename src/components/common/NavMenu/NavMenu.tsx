"use client";
import clsx from "clsx";
import styles from "./NavMenu.module.css";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

type Props = {
  className?: string;
  type: "header" | "mobilemenu" | "footer";
  onClick?: () => void;
};

const linksNavMenu = [
  { href: "/", linkName: "HOME" },
  { href: "/about", linkName: "ABOUT" },
  { href: "/shop", linkName: "SHOP" },
  { href: "/book_classes", linkName: "BOOK CLASSES" },
  { href: "/open_hours", linkName: "OPEN HOURS" },
  { href: "/contacts", linkName: "CONTACTS" },
];

function NavMenu({ className = "", type, onClick }: Props) {
  const pathnameFromHook = usePathname();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pathname: string | null = mounted ? pathnameFromHook : null;

  return (
    <nav className={clsx(styles.menu, styles[type], styles[className])}>
      <ul className={clsx(styles.menu__list, styles[type])}>
        {linksNavMenu.map((link) => (
          <NavLink
            key={link.href}
            onClick={onClick}
            href={link.href}
            type={type}
            linkName={link.linkName}
            pathname={pathname}
          />
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;

type PropsLink = {
  href: string;
  linkName: string;
  type: "header" | "mobilemenu" | "footer";
  onClick?: () => void;
  pathname: string | null;
};

function NavLink({ href, linkName, type, onClick, pathname }: PropsLink) {
  const isActive: boolean = pathname === href;

  return (
    <li className={styles.menu__item}>
      <Link
        href={href}
        className={clsx(
          styles.menu__link,
          styles[type],
          isActive && styles.active__link,
          "big_btns"
        )}
        onClick={onClick}
      >
        {linkName}
      </Link>
    </li>
  );
}
