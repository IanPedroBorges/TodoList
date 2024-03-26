import { Request, Response, Router } from "express";
import ValidationUserRegister from "../middleware/users/validatations";
import TodoController from "../controller/TodoController";

const router = Router();

const TodoControll = new TodoController();

router.get('/', ValidationUserRegister.tokenValidation, (req: Request, res: Response) => TodoControll.findAllByUserId(req, res));

router.post('/', ValidationUserRegister.tokenValidation, (req: Request, res: Response) => TodoControll.create(req, res));

router.put('/:id', ValidationUserRegister.tokenValidation, (req: Request, res: Response) => TodoControll.update(req, res));

router.delete('/:id', ValidationUserRegister.tokenValidation, (req: Request, res: Response) => TodoControll.delete(req, res));


export default router;