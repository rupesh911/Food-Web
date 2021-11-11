import axios from 'axios';

const URL = "http://localhost:5000/cartItems";

class CartItemsService {

    getCartItems() {
        return axios.get(URL);
    }

    createCartItem(item) {
        return axios.post(URL, item);
    }

    deletecartItem(itemId) {
        return axios.delete(URL + '/' + itemId);
    }

    // deleteAllCartItems() {
    //     return axios.deleteMany(URL);
    // }
}

export default new CartItemsService()