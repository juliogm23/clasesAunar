import express from 'express';
const router = express.Router();
import { getApiResponse } from '../controllers/apiController.js';

router.get('/', getApiResponse);

export default router;