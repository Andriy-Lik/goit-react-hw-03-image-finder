import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

function ImageGallery({ images, openModal }) {
    return (
        <ul className={css.ImageGallery}>
            {images.map(({ id, smallImage, largeImage, description }) => (
                <ImageGalleryItem key={id} smallImage={smallImage} largeImage={largeImage} description={description} openModal={openModal} />
            ))} 
        </ul>
    );
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            smallImage: PropTypes.string.isRequired,
            largeImage: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ImageGallery;