import { useState } from 'react';
import styles from './Loading.module.css';
import logo from './Logo.png';
import placeholder from './Logo-3.svg'; // Assuming you have a placeholder image

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
        <div className={styles.container}>
            <ProgressiveImage
                src={logo}
                placeholder={placeholder} // Provide a placeholder image if desired
            />
            <div className={styles.loadingText}>
                Welcome to <br />
                Rayene Kanoun&apos;s<br />
                Portfolio<br />
            </div>
        </div>
    );
}
