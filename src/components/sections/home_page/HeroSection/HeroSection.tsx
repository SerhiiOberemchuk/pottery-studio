import Image from "next/image";
import styles from "./hero-section.module.css";
import LinkPrimary from "@/components/ui/LinkPrimary/LinkPrimary";

function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.flex_container}`}>
        <p className="subtitle_2 black">
          Our classes and courses are friendly for everyone.
        </p>
        <div className={styles.hero_image_container}>
          <div>
            <Image
              width={60}
              height={88}
              src={"/hero-section/hero_little_foto_default.webp"}
              alt="hero_little_foto_default"
              className="hero_little_foto_default"
            />
            <h2 className="subtitle_2 black ">
              We are a Studio offering Pottery and Classes
            </h2>
          </div>
          <Image
            src={"/hero-section/hero_big_foto_default.webp"}
            height={280}
            width={212}
            alt="hero_image"
          />
        </div>
        <h1 className="title_big brown_dark">EXPLORE THE ANCIENT ART</h1>
        <p className="body_text_btns brown_dark">
          Unleash your creativity in our pottery studio, offering inspiring
          classes and a curated shop.
        </p>
        <LinkPrimary href="#shop" className="">
          shop
        </LinkPrimary>
      </div>
    </section>
  );
}

export default HeroSection;
