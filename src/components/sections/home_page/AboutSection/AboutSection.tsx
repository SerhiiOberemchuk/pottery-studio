import clsx from "clsx";
import styles from "./AboutSection.module.css";
import TextContainer from "./TextContainer";

function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={clsx("container", styles.grid_container)}>
        <TextContainer />
      </div>
    </section>
  );
}

export default AboutSection;
