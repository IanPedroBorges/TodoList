import { Router } from "express";

const router = Router();

import UserRoute from './UserRoutes';
import TodoRoute from './TodoRoutes';

router.use('/users', UserRoute );
router.use('/todos',TodoRoute)

export default router;