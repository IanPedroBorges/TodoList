import { Request } from "express";

export interface UserInterface {
    id: number;
    username: string;
    role: string;
    email: string;
    password: string;
}

export interface UserLogin {
    email: string;
    password: string;
}

export interface UserReturn {
    email: string;
    role: string;
    username: string;
}

export interface AuthenticateRequest extends Request {
    user: UserReturn;
}