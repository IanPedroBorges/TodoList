import { Request, Response } from "express";
import UserService from "../service/UserService";
import httpStatus from "../utils/httpResponse";

export default class UserController {
    constructor(private service = new UserService()) {}

    async create(req: Request, res: Response): Promise<Response> {
        const { data, status } = await this.service.create(req.body);
        return res.status(httpStatus(status)).json(data);
    }

    async login(req: Request, res: Response): Promise<Response> {
        const { data, status } = await this.service.login(req.body);
        return res.status(httpStatus(status)).json(data);
    }
}