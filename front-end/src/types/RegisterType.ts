export type RegisterType = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const initialRegisterState: RegisterType = {
	username: '',
	email: '',
	password: '',
	confirmPassword: ''
};