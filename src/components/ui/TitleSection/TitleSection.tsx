import clsx from "clsx";
import styles from "./TitleSection.module.css";
import { HTMLAttributes, ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLHeadingElement>;

function TitleSection({
  children = "section title",
  className,
  ...rest
}: Props) {
  return (
    <h2 className={clsx("title", styles.title, className)} {...rest}>
      {children}
    </h2>
  );
}

export default TitleSection;
