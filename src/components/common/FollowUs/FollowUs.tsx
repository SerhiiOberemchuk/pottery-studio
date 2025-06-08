import styles from "./FollowUs.module.css";

import ButtonOrLink from "@/components/shared/button/ButtonOrLink";
import Image from "next/image";

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
            <ButtonOrLink href={elem.href}>
              <Image
                src={`icon/${elem.src}`}
                width={32}
                height={32}
                alt={elem.alt}
              />
            </ButtonOrLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FollowUs;
