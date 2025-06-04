import Image from "next/image";
import styles from "../AboutSection.module.css";

function Slider() {
  return (
    <div className={styles.slider}>
      <Image
        src={"/aboute-section/foto_little_1.jpg"}
        alt="slide1"
        width={252}
        height={312}
        className={styles.image_litl_slide}
      />
      <div>. . . .</div>
    </div>
  );
}

export default Slider;
