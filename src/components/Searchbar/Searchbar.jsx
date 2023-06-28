import React, { useState } from 'react';
import { fetchImages } from 'services';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    if (searchValue.trim() !== '') {
      setIsLoading(true);
      setError(null);
      setPage(1);
      setImages([]);
      try {
        await fetchData(searchValue);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
  };

  const handleLoadMore = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await fetchData(searchValue, page + 1);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const handleImageClick = image => {
    setShowModal(true);
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const fetchData = async (searchValue, page = 1) => {
    const newImages = await fetchImages(searchValue, page);
    setImages(prevImages => [...prevImages, ...newImages]);
    setIsLoading(false);
    setPage(page);
  };

  const hasImages = images.length > 0;

  return (
    <div className="container">
      <header className={clsx('Searchbar')}>
        <form className={clsx('SearchForm')} onSubmit={handleFormSubmit}>
          <input
            className={clsx('SearchForm-input')}
            onChange={handleChange}
            type="text"
            name="searchValue"
            value={searchValue}
          />
          <button className={clsx('SearchForm-button')} type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </header>
      {isLoading && <Loader />}
      {error && <div>Oops, something went wrong</div>}
      {hasImages && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {hasImages && !isLoading && !error && <Button onClick={handleLoadMore} />}
      {showModal && (
        <Modal image={selectedImage} onCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

export default Searchbar;
