import styles from "./FollowUs.module.css";

import LinkSocial from "@/components/ui/LinkSocial/LinkSocial";

const socialsLinks = [
  { href: "#", src: "link_insta.svg", alt: "інстаграмм" },
  { href: "#", src: "link_facebook.svg", alt: "facebook" },
  { href: "#", src: "link_telegram.svg", alt: "telegram" },
];

function FollowUs() {
  return (
    <div className={styles.followUs}>
      <h5 className={styles.followUs__title}>Follow us on</h5>
      <ul className={styles.followUs__list}>
        {socialsLinks.map((elem, index) => (
          <li key={index} className={styles.followUs__item}>
            <LinkSocial href={elem.href} src={elem.src} alt={elem.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FollowUs;
