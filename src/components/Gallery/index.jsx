import { useState } from "react";
import styles from "./Gallery.module.css";

export default function Gallery({ images }) {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className={`${styles.gallery} flex-1`}>
      <div className={styles.mainImage}>
        <img src={images[currentImage]} alt="product" />
      </div>
      <div className={styles.galleryImages}>
        {images.map((image, index) => (
          <img
            src={image}
            alt={`product view ${index + 1}`}
            key={index}
            className={index === currentImage ? `${styles.active}` : undefined}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
}
