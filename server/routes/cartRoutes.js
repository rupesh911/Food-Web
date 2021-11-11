import express from 'express';

import { getcartItems, createcartItems, deleteCartItem } from '../controllers/cartControllers.js';

const router = express.Router();

router.get('/', getcartItems);
router.post('/', createcartItems);
router.delete('/:id', deleteCartItem);

export default router;