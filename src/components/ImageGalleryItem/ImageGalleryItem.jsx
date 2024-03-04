import { useState } from 'react';
import styles from './ImageGalleryItem.module.css';
import { Modal } from 'components';

export const ImageGalleryItem = ({ image }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(prev => !prev);
  };

  return (
    <>
      <li className={styles.ImageGalleryItem}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          className={styles.ImageGalleryItemImage}
          loading="lazy"
          onClick={toggleModal}
        />
        {isShowModal && (
          <Modal
            largeImageURL={image.largeImageURL}
            tags={image.tags}
            onClose={toggleModal}
          />
        )}
      </li>
    </>
  );
};
