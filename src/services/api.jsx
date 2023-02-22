import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '31735477-5baa73130af622235607cbe24';

const searchImages = async (request, page) => {
    const response = axios.get(`?q=${request}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data;
};

export default searchImages;

searchImages.propTypes = {
    request: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
};