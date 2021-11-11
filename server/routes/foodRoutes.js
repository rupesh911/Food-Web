import express from 'express';

import { getfoodItems, createFoodItems } from '../controllers/foodController.js';

const router = express.Router();

router.get('/', getfoodItems);
router.post('/', createFoodItems);

export default router;