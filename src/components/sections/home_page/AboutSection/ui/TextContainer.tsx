import LinkPrimary from "@/components/ui/LinkPrimary/LinkPrimary";
import SubtitleSection from "@/components/ui/SubtitleSection/SubtitleSection";
import TitleSection from "@/components/ui/TitleSection/TitleSection";
import styles from "../AboutSection.module.css";

function TextContainer() {
  return (
    <div className={styles.text_cont}>
      <div className={styles.top_text_container}>
        <SubtitleSection>About</SubtitleSection>
        <TitleSection>About Studio</TitleSection>
      </div>
      <div className={styles.bottom_text_container}>
        <p className=" body_text_btns grey_dark">
          Welcome to our pottery studio, where creativity takes shape! Nestled
          in the heart of artistic expression, our studio is a haven for both
          beginners and seasoned potters alike.
        </p>
        <LinkPrimary href="/">more info</LinkPrimary>
      </div>
    </div>
  );
}

export default TextContainer;
