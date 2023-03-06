import axios from 'axios';

const searchImages = async (request, page) => {
    const response = await axios.get(`https://pixabay.com/api/`, {
        params: {
            key: '31735477-5baa73130af622235607cbe24',
            q: request,
            image_type: 'photo',
            orientation: 'horizontal',
            page: page,
            per_page: 12,
            safesearch: true,
        },
    });
    
    return response.data;
};

export default searchImages;




// import PropTypes from 'prop-types';

// const URL = 'https://pixabay.com/api/';
// const KEY = '31735477-5baa73130af622235607cbe24';
// const OPTIONS = '&image_type=photo&orientation=horizontal&per_page=12';

// function searchImages(imgName, page) {
//     return fetch(`${URL}?q=${imgName}&page=${page}&key=${KEY}${OPTIONS}`)
//     .then(response => response.json());
// }

// searchImages.propTypes = {
//     request: PropTypes.string.isRequired,
//     page: PropTypes.number.isRequired,
// };