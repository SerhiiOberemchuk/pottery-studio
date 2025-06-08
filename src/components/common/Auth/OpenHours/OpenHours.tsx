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
type Props = {
  isLogIn: boolean;
};

function OpenHours({ isLogIn }: Props) {
  return (
    <div className={clsx(styles.auth_open_hours, isLogIn && styles.isLogIn)}>
      <SubtitleSection className={clsx(styles.title)}>
        {isLogIn ? "Registration" : "Working hours"}
      </SubtitleSection>
      <TitleSection>{isLogIn ? "New Customer?" : "Open hours"}</TitleSection>

      {isLogIn ? (
        <p className={clsx(styles.auth_week_list, "body_text_btns")}>
          Creating account wiil give you access to all features and benefits of
          our web site including shopping, registration on our events, special
          discounts, storage of information for quicker checkout and booking
          classes
        </p>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default OpenHours;
