import styles from "./Loading.module.css";
import logo from "./Logo.png";
import { hourglass } from "ldrs";
hourglass.register();


export default function Loading() {
  return (
    <div className={styles.theoutercontainer} >

      <div className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.loadingText}>
          Welcome to <br />
          Rayene Kanoun&apos;s
          <br />
          Portfolio
          <br />
        </div>
      </div>
      <l-hourglass
        size="40"
        bg-opacity="0.1"
        speed="1.75"
        color="white"
      ></l-hourglass>
    </div>
  );
}
