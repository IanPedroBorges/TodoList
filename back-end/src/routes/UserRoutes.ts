import { Request, Response, Router } from "express";
import UserController from "../controller/UserController";
import ValidationUserRegister from "../middleware/users/validatations";

const router = Router();

const userControll = new UserController();

router.post('/login',
    ValidationUserRegister.validateEmail,
    ValidationUserRegister.validatePassword,
    (req: Request, res: Response) => userControll.login(req, res));

router.post('/register',
    ValidationUserRegister.validateName,
    ValidationUserRegister.validateEmail,
    ValidationUserRegister.validatePassword,
    ValidationUserRegister.validateConfirmPassword,
    (req: Request, res: Response) => userControll.create(req, res));

export default router;