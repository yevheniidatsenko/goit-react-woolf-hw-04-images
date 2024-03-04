import React from 'react';
import { ImageGalleryItem } from 'components';
import styles from './ImageGallery.module.css';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.webformatURL}
          image={image}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};
