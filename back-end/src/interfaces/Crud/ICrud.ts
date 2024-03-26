import { NewEntity } from "..";
import { UserInterface } from "../users/UserInterface";

export interface ICrudCreate<T> {
    create: (user: NewEntity<T>) => Promise<T | null>;
}

export interface ICrudRead {
    findById: (id: number) => Promise<UserInterface | null>;
    findByEmail: (email: string) => Promise<UserInterface | null>;
}

export interface ICrudUpdate <T> {
    update: (id: number, user: T) => Promise<UserInterface>;
}

export interface ICrudDelete {
    delete: (id: number) => Promise<void>;
}

export interface ICrud<T> extends ICrudCreate<T>, ICrudRead, ICrudUpdate<T>, ICrudDelete {}