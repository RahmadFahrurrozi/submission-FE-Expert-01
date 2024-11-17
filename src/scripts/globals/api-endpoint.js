import CONFIG from './config';

const API_ENDPOINT = {
    LIST: `${CONFIG.BASE_URL}list`,
    DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
    REVIEW: (id) => `${CONFIG.BASE_URL}review/${id}`,
    POST_REVIEW: `${CONFIG.BASE_URL}review`,
    FAVORITE: `${CONFIG.BASE_URL}favorite`,
    POST_FAVORITE: `${CONFIG.BASE_URL}favorite`,
    DELETE_FAVORITE: (id) => `${CONFIG.BASE_URL}favorite/${id}`,
    SEARCH: (query) => `${CONFIG.BASE_URL}search?q=${query}`,
};

export default API_ENDPOINT;