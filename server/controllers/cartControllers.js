import express from 'express';
import mongoose from 'mongoose';

import CartMessage from '../models/cartModel.js';

const router = express.Router();

export const getcartItems = async (req, res) => {
    try {
        const allCartItems = await CartMessage.find();
        res.json(allCartItems);
    } catch (error) {
        res.send("Error" + error);
    }
}

export const createcartItems = async (req, res) => {
    const cartItem = new CartMessage(
        {
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            description: req.body.description
        }
    )
    console.log("Add Data Successfully.");
    try {
        await cartItem.save();
        res.json(cartItem);
    } catch (error) {
        res.send("Error" + error);
    }
}

export const deleteCartItem = async (req, res) => {
    const { id } = req.params;
    console.log("Deleted Data Successfully.");
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await CartMessage.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
}


export default router;