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
      <h5 className={styles.followUs_title}>Follow us on</h5>
      <ul className={styles.followUs_list}>
        {socialsLinks.map((elem, index) => (
          <li key={index} className={styles.followUs_item}>
            <LinkSocial href={elem.href} src={elem.src} alt={elem.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FollowUs;
