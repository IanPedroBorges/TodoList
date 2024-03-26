export type LoginType = {
    email: string;
    password: string;
}

export const initialLoginState: LoginType = {
	email: '',
	password: ''
};