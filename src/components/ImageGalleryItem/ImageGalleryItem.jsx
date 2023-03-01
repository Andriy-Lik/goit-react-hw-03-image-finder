import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ description, smallImage, largeImage, openmodal }) {
    return (
        <li className={css.ImageGalleryItem} onClick={openmodal}>
            <img className={css.ImageGalleryItem-image} src={smallImage} alt={description} data-large={largeImage} />
        </li>
    );
}

ImageGalleryItem.propTypes = {
    description: PropTypes.string,
    smallImage: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
    openmodal: PropTypes.string.isRequired,
};

export default ImageGalleryItem;