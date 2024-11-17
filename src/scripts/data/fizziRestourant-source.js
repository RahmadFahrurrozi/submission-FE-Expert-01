import API_ENDPOINT from '../globals/api-endpoint';

class FizziRestourantSource {
    static async listRestaurants() {
        const response = await fetch(API_ENDPOINT.LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }
    static async detailRestaurant(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const responseJson = await response.json();
        return responseJson.restaurant;
    }
    static async reviewRestaurant(id) {
        const response = await fetch(API_ENDPOINT.REVIEW(id));
        const responseJson = await response.json();
        return responseJson.reviews;
    }
    static async favoriteRestaurant(id) {
        const response = await fetch(API_ENDPOINT.POST_FAVORITE(id));
        const responseJson = await response.json();
        return responseJson;
    }
    static async unfavoriteRestaurant(id) {
        const response = await fetch(API_ENDPOINT.DELETE_FAVORITE(id));
        const responseJson = await response.json();
        return responseJson;
    }
}

export default FizziRestourantSource;