import API_ENDPOINT from '../globals/api-endpoint';

class FizziRestourantSource {
    async listRestaurants() {
        const response = await fetch(API_ENDPOINT.LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }
    static async detailRestourant(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const responseJson = await response.json();
        return responseJson.restaurant;
    }
    static async reviewRestourant(id) {
        const response = await fetch(API_ENDPOINT.REVIEW(id));
        const responseJson = await response.json();
        return responseJson.reviews;
    }
}

export default FizziRestourantSource;