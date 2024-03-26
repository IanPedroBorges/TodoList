import { LoginType } from '../LoginType';

export type UserReturn = {
    email: string;
    role: string;
    username: string;
}

export type LocalStorageType = {
    login: LoginType,
    setLogin: (login: LoginType) => void
}

export type UserContextType = {
    token: string | undefined;
    setToken: (token: string) => void;
    User: UserReturn | undefined;
    setUser: (User: UserReturn) => void;
}