import React from 'react';
import clsx from 'clsx';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={clsx('ImageGallery')}>
      {images.map(
        ({ id, largeImageURL, webformatURL, likes, downloads, comments }) => {
          return (
            <ImageGalleryItem
              downloads={downloads}
              likes={likes}
              key={id}
              comments={comments}
              largeImageURL={largeImageURL}
              webformatURL={webformatURL}
              onSingleImageClick={onImageClick}
            />
          );
        }
      )}
    </ul>
  );
};

export default ImageGallery;
