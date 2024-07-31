import styles from "./Content.module.css";
import Landing from "../landing/landing.jsx";
import Description from "../description/description.jsx";
export default function MainContent() {

  return (
    <div className={styles.container}>
      <Landing />
      <Description />
    </div>
  );
}
