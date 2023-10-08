import express , {Router} from 'express';
import { createUser, deleteUser, getAllUsers } from '../controllers/user.controller';
import { validateUser } from '../middleware/validationMiddleware';
import catchAsync from '../utils/catchAsync';

const router = express.Router();

router.post('/users',validateUser, catchAsync(createUser));

router.get('/users', catchAsync(getAllUsers));

router.delete('/user/:id', catchAsync(deleteUser));


export default router;
