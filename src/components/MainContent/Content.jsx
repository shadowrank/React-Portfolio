import styles from "./Content.module.css";
import Landing from "../landing/landing.jsx";
import Description from "../description/description.jsx";

export default function MainContent() {

  return (
    <div className={styles.container}>
      <Landing className={styles.mentali} />
      <Description />
      <div style={{height:"200px" ,width:"200px"}}> </div>
    </div>
  );
}
