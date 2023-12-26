import { LoginType } from '../LoginType';

export type LocalStorageType = {
    login: LoginType,
    setLogin: (login: LoginType) => void
}