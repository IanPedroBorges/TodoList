import { Request, Response } from "express";
import httpStatus from "../utils/httpResponse";
import TodoService from "../service/TodoService";

export default class TodoController {
    constructor(private service = new TodoService()) {}

    async create(req: any, res: Response): Promise<Response> {
        const { data, status } = await this.service.create(req.body, req.user);
        return res.status(httpStatus(status)).json(data);
    }

    async findAllByUserId(req: any, res: Response): Promise<Response> {
        const { data, status } = await this.service.findAllByUserId(req.user.id);
        return res.status(httpStatus(status)).json(data);
    }

    async delete(req: Request, res: Response): Promise<Response> {
        const { data, status } = await this.service.delete(Number(req.params.id));
        return res.status(httpStatus(status)).json(data);
    }

    async update(req: Request, res: Response): Promise<Response> {
        const { data, status } = await this.service.update(Number(req.params.id), req.body);
        return res.status(httpStatus(status)).json(data);
    }
   
}