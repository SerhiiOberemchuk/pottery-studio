import clsx from "clsx";
import style from "./SubtitleSection.module.css";

type Props = { children: React.ReactNode; className?: string };

export default function SubtitleSection({ children, className }: Props) {
  return (
    <p
      className={clsx(
        // "body_text_btns",
        style.subtitle,
        className
      )}
    >
      <span></span> {children}
    </p>
  );
}
