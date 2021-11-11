import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    description: String
})

var CartMessage = mongoose.model('CartMessage', cartSchema);

export default CartMessage;