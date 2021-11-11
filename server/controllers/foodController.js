import express from 'express';
import mongoose from 'mongoose';

import FoodMessage from '../models/foodModel.js';

const router = express.Router();

export const getfoodItems = async (req, res) => {
    try {
        const allFoodItems = await FoodMessage.find();
        res.json(allFoodItems);
    } catch (error) {
        res.send("Error" + error);
    }
}

export const createFoodItems = async (req, res) => {
    const foodItem = new FoodMessage(
        {
            name: req.body.name,
            image: req.body.image,
            subItems: req.body.subItems.map(item => {
                return {
                    name: item.name,
                    image: item.image,
                    price: item.price,
                    description: item.description
                }
            })
        }
    )
    console.log(foodItem);
    try {
        await foodItem.save();
        res.json(foodItem);
    } catch (error) {
        res.send("Error" + error);
    }
}

export default router;