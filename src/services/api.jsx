import PropTypes from 'prop-types';

const URL = 'https://pixabay.com/api/';
const KEY = '31735477-5baa73130af622235607cbe24';
const OPTIONS = '&image_type=photo&orientation=horizontal&per_page=12';

function searchImages(imgName, page) {
    return fetch(`${URL}?q=${imgName}&page=${page}&key=${KEY}${OPTIONS}`)
    .then(response => response.json());
}

searchImages.propTypes = {
    request: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
};

export default searchImages;

// import axios from 'axios';
// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const KEY = '31735477-5baa73130af622235607cbe24';

// const searchImages = async (request, page) => {
//     const response = axios.get(`?q=${request}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
//     return response.data;
// };

// export default searchImages;