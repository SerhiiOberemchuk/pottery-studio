import styles from "./OpenHours.module.css";
import clsx from "clsx";

import SubtitleSection from "@/components/ui/SubtitleSection/SubtitleSection";
import TitleSection from "@/components/ui/TitleSection/TitleSection";
import ButtonOrLink from "@/components/shared/button/ButtonOrLink";

const businessHours = {
  Monday: "10:00 AM - 8:00 PM",
  Tuesday: "10:00 AM - 8:00 PM",
  Wednesday: "11:00 AM - 7:00 PM",
  Thursday: "Closed (Private Workshops available)",
  Friday: "9:00 AM - 7:00 PM",
  Saturday: "12:00 AM - 4:00 PM",
  Sunday: "Open for special events",
};

function OpenHours() {
  return (
    <div className={clsx(styles.auth_open_hours)}>
      <SubtitleSection className={clsx(styles.title)}>
        Working hours
      </SubtitleSection>
      <TitleSection>Open hours</TitleSection>
      <ul className={clsx(styles.auth_week_list)}>
        {Object.entries(businessHours).map(([day, hours]) => (
          <li key={day} className={clsx(styles.auth_week_item)}>
            <p className={clsx(styles.auth_week_day)}>{day}:</p>
            <p className={clsx(styles.auth_week_hours)}>{hours}</p>
          </li>
        ))}
      </ul>
      <ButtonOrLink href="/open_hours" variant="white">
        more info
      </ButtonOrLink>
    </div>
  );
}

export default OpenHours;
