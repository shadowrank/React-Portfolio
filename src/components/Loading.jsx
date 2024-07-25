import { useState } from "react";
import styles from "./Loading.module.css";
import logo from "./Logo.png";
import placeholder from "./Logo-3.svg"; // Assuming you have a placeholder image
/* src/styles/fonts.css */

import { hourglass } from "ldrs";

hourglass.register();

function ProgressiveImage({ src, placeholder }) {
  const [imageSrc, setImageSrc] = useState(placeholder);

  const handleImageLoad = () => {
    setImageSrc(src);
  };

  return (
    <img
      className="preloader-img"
      fetchPriority="high"
      src={imageSrc}
      onLoad={handleImageLoad}
      alt="Loading logo"
    />
  );
}
export default function Loading() {
  return (
    <div className={styles.theoutercontainer} >

      <div className={styles.container}>
        <ProgressiveImage
          src={logo}
          placeholder={placeholder} // Provide a placeholder image if desired
        />
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
