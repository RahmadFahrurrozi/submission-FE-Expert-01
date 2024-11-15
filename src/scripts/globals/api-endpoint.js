import CONFIG from './config.js';

const API_ENDPOINT = {
    LIST: `${CONFIG.BASE_URL}/list`,
    DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
    REVIEW: (id) => `${CONFIG.BASE_URL}/review/${id}`,
    SEARCH: (query) => `${CONFIG.BASE_URL}/search?q=${query}`,
};

export default API_ENDPOINT;