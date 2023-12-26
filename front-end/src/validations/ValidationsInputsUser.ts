export type validationTypeLogin = {
    error: boolean;
    message?: string;
}

export const validatePassword = (password: string): validationTypeLogin => {
	if (!password) {
		return {
			error: true,
			message: 'Senha é obrigatória'
		};
	}
	if (password.length < 6) {
		return {
			error: true,
			message: 'Senha deve ter no mínimo 6 caracteres'
		};
	}
	return {
		error: false
	};
};

export const validateEmail = (email: string): validationTypeLogin => {
	if (!email) {
		return {
			error: true,
			message: 'Email é obrigatório'
		};
	}
	const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/i;
	if (!regex.test(email)) {
		return {
			error: true,
			message: 'Email inválido'
		};
	}
	return {
		error: false
	};
};

export const validateName = (name: string): validationTypeLogin => {
	if (!name) {
		return {
			error: true,
			message: 'Nome é obrigatório'
		};
	}
	return {
		error: false
	};
};

export const validateConfirmPassword = (password: string, confirmPassword: string): validationTypeLogin => {
	if (!confirmPassword) {
		return {
			error: true,
			message: 'Confirmar senha é obrigatório'
		};
	}
	if (password !== confirmPassword) {
		return {
			error: true,
			message: 'Senhas não conferem'
		};
	}
	return {
		error: false
	};
};