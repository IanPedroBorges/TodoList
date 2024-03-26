import { NextFunction, Request, Response } from "express";
import JWT from "../../utils/jwt";
import { UserReturn } from "../../interfaces/users/UserInterface";

export default class ValidationUserRegister {
    static validateName(req: Request, res:Response, next:NextFunction) {
        const { username } = req.body;
        if (!username) {
            return res.status(400).json({ error: 'Username is required' });
        }
        if (username.length < 3) {
            return res.status(400).json({ error: 'Username must have at least 3 characters' });
        }
        next();
    }

    static validateEmail(req: Request, res:Response, next:NextFunction) {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }
        if (!email.includes('@') || !email.includes('.')) {
            return res.status(400).json({ error: 'Invalid email' });
        }
        next();
    }

    static validatePassword(req: Request, res:Response, next:NextFunction) {
        const { password } = req.body;
        if (!password) {
            return res.status(400).json({ error: 'Password is required' });
        }
        if (password.length < 6) {
            return res.status(400).json({ error: 'Password must have at least 6 characters' });
        }
        next();
    }

    static validateConfirmPassword(req: Request, res:Response, next:NextFunction) {
        const { password, confirmPassword } = req.body;
        if (!confirmPassword) {
            return res.status(400).json({ error: 'Confirm password is required' });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }
        next();
    }

    static tokenValidation(req: any, res:Response, next:NextFunction) {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({ error: 'Token is required' });
        }
        try {
            const token = authorization.split(' ')[1];
            const decoded = JWT.verify(token);
            if (!decoded) {
                return res.status(401).json({ error: 'Invalid token' });
            };
            req.user = decoded as UserReturn;
            next();
        } catch (error) {}
    }
}