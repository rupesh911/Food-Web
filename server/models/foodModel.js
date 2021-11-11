import mongoose from 'mongoose';

const foodSchema = mongoose.Schema({
    name: String,
    image: String,
    subItems: [
        {
            name: String,
            image: String,
            price: Number,
            description: String
        }
    ]
})

var FoodMessage = mongoose.model('FoodMessage', foodSchema);

export default FoodMessage;