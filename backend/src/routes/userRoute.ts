import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

router.post('/', UserController.crateUser);


export default router;