import axios from 'axios';

const URL = "http://localhost:5000/foodItems";

class FoodItemsService {

    getFoodItems() {
        return axios.get(URL);
    }
}

export default new FoodItemsService()