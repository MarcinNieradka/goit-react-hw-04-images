import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faDownload,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

const ImageGalleryItem = ({
  likes,
  comments,
  downloads,
  largeImageURL,
  webformatURL,
  onSingleImageClick,
}) => {
  const handleImageClick = () => {
    onSingleImageClick(largeImageURL);
  };

  return (
    <li className={clsx('ImageGalleryItem')}>
      <img
        className={clsx('ImageGalleryItem-image')}
        src={webformatURL}
        alt="pic of smth"
        onClick={handleImageClick}
      />
      <div className={clsx('ImageGallery-image-descr')}>
        <p>
          <span className={clsx('ImageGallery-image-descr__span')}>
            <FontAwesomeIcon
              icon={faThumbsUp}
              className={clsx('font-awesome-icon')}
            />
          </span>
          {likes}
        </p>
        <p>
          <span className={clsx('ImageGallery-image-descr__span')}>
            <FontAwesomeIcon
              icon={faDownload}
              className={clsx('font-awesome-icon')}
            />
          </span>
          {downloads}
        </p>
        <p>
          <span className={clsx('ImageGallery-image-descr__span')}>
            <FontAwesomeIcon
              icon={faComment}
              className={clsx('font-awesome-icon')}
            />
          </span>
          {comments}
        </p>
      </div>
    </li>
  );
};

export default ImageGalleryItem;
