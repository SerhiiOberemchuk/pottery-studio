import clsx from "clsx";
import styles from "./AboutSection.module.css";
import TextContainer from "./ui/TextContainer";
import Slider from "./ui/Slider";
import Image from "next/image";

function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={clsx("container", styles.grid_container)}>
        <Slider />
        <Image
          src={"/aboute-section/foto_big_1.jpg"}
          alt="foto main lady"
          width={534}
          height={832}
          className={styles.image_big}
        />
        <TextContainer />
      </div>
    </section>
  );
}

export default AboutSection;
