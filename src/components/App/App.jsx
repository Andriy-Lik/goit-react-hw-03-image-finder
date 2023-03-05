import { Component } from "react";
import css from './App.module.css';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

import searchImages from "services/api";
import Searchbar from "components/Searchbar";
import ImageGallery from "components/ImageGallery";
import Button from "components/Button";
import Loader from "components/Loader";
import Modal from "components/Modal";

export class App extends Component {
  state = {
    imgName: '',
    page: 1,
    images: null,
    loading: false,
    error: null,
    totalImages: null,
    imagesOnPage: 0,
    showModal: false,
    currentImageUrl: null,
    currentImageDescription: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { imgName, page, totalImages } = this.state;

    if(prevState.imgName !== imgName) {
      this.setState({ loading: true });

      searchImages(imgName, page)
        .then(({ hits, totalHits }) => { const imagesArray = hits.map(hit => ({ id: hit.id, smallImage: hit.webformatURL, largeImage: hit.largeImageURL, description: hit.tags, }));

          return this.setState({ page: 1, images: imagesArray, imagesOnPage: imagesArray.length, totalImages: totalHits });
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }

    if(prevState.page !== page && page !== 1) {
      this.setState({ loading: true });
      searchImages(imgName, page)
      .then(({ hits }) => {
        const imagesArray = hits.map(hit => ({ id: hit.id, smallImage: hit.webformatURL, largeImage: hit.largeImageURL, description: hit.tags, }));

        return this.setState(({ images, imagesOnPage }) => {
          return {
            images: [...images, ...imagesArray],
            imagesOnPage: imagesOnPage + imagesArray.length,
          };
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
    }  

    if (prevState.totalImages !== totalImages && totalImages === 0) {
      toast.error('No images found for your request!');
      return this.setState({ totalImages: null });
    }
  }

  onFormSubmit = imgName => {
    this.setState({ imgName: imgName });
  };

  loadNextPage = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  openModal = e => {
    const currentImageUrl = e.target.dataset.large;
    const currentImageDescription = e.target.alt;

    if (e.target.nodeName === 'IMG') {
      this.setState(state => ({ showModal: !state.showModal, currentImageUrl: currentImageUrl, currentImageDescription: currentImageDescription }));
    }
  };

  render() {
    const { images, loading, totalImages, imagesOnPage, showModal, currentImageUrl, currentImageDescription } = this.state;
    return (
      <div  className={css.App}>
        <Toaster />
        <Searchbar onSubmit={this.onFormSubmit} />
        {images && <ImageGallery images={images} openModal={this.openModal} />}
        {loading && <Loader /> }
        {imagesOnPage >= 12 && imagesOnPage < totalImages && (<Button loadNextPage={this.loadNextPage} />)}
        {showModal && <Modal closeModal={this.toggleModal} currentImageUrl={currentImageUrl} currentImageDescription={currentImageDescription} />}
      </div>
    );
  }
};
