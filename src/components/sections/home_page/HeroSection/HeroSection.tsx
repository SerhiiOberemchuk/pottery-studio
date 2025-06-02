import Image from "next/image";
import styles from "./hero-section.module.css";
import LinkPrimary from "@/components/ui/LinkPrimary/LinkPrimary";
import clsx from "clsx";

function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.flex_container}`}>
        <SubtitleTop visible="mobile" />
        <div className={styles.hero_image_container}>
          <div>
            <div className={styles.titles_container}>
              <SubtitleTop visible="tablet" />
              <Title visible="tablet" />
            </div>
            <div className={styles.litle_foto_container}>
              <div>
                <Image
                  width={158}
                  height={196}
                  src={"/hero-section/little-foto.webp"}
                  alt="hero_little_foto_default"
                  className={styles.little_foto}
                />
                <h2 className="subtitle_2 black ">
                  We are a Studio offering Pottery and Classes
                </h2>
              </div>
              <TextWithLink visible="tablet" />
            </div>
          </div>
          <Image
            src={"/hero-section/hero_image.webp"}
            height={656}
            width={718}
            alt="hero_image"
            className={styles.big_foto}
          />
        </div>
        <Title visible="mobile" />
        <TextWithLink visible="mobile" />
      </div>
    </section>
  );
}

export default HeroSection;

type Visible = { visible: "mobile" | "tablet" };

function TextWithLink({ visible }: Visible) {
  return (
    <div
      className={clsx(
        styles.text_with_link_container,
        visible === "mobile"
          ? styles.hiden_from_tablet
          : styles.visible_from_tablet
      )}
    >
      <p className="body_text_btns brown_dark">
        Unleash your creativity in our pottery studio, offering inspiring
        classes and a curated shop.
      </p>
      <LinkPrimary href="#shop" className="">
        shop
      </LinkPrimary>
    </div>
  );
}
function Title({ visible }: Visible) {
  return (
    <h1
      className={clsx(
        "title_big brown_dark",
        visible === "mobile"
          ? styles.hiden_from_tablet
          : styles.visible_from_tablet
      )}
    >
      EXPLORE THE ANCIENT ART
    </h1>
  );
}
function SubtitleTop({ visible }: Visible) {
  return (
    <p
      className={clsx(
        "subtitle_2 black",
        styles.subtitle_top,
        visible === "mobile"
          ? styles.hiden_from_tablet
          : styles.visible_from_tablet
      )}
    >
      Our classes and courses are friendly for everyone.
    </p>
  );
}
