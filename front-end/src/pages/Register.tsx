import { useState } from 'react';
import { RegisterType, initialRegisterState } from '../types/RegisterType';
import {
	validateConfirmPassword,
	validateEmail,
	validateName,
	validatePassword,
} from '../validations/ValidationsInputsUser';
import { Link } from 'react-router-dom';

export default function Register() {
	const [inputsRegister, setInputsRegister] =
    useState<RegisterType>(initialRegisterState);

	const habilityButton =
    validateConfirmPassword(inputsRegister.password,inputsRegister.confirmPassword).error ||
    validateEmail(inputsRegister.email).error ||
    validateName(inputsRegister.username).error ||
    validatePassword(inputsRegister.password).error;

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputsRegister({
			...inputsRegister,
			[event.target.id]: event.target.value,
		});
	};
	return (
		<div className='bg-stone-200 min-h-screen flex items-center justify-center'>
			<form className='bg-white px-16 py-12 rounded-2xl shadow-xl text-center w-100 relative'>
				<h1 className='text-6xl mb-10'>Registrar</h1>
				<fieldset className='text-left mb-4'>
					<input
						type="text"
						id="name"
						placeholder="Escreva seu nome"
						className='w-full block bg-black rounded p-2 text-white'
						onChange={handleInputChange}
						value={inputsRegister.username}
					/>
					{validateName(inputsRegister.username).error && (
						<small className='text-red-400 font-normal'>{validateName(inputsRegister.username).message}</small>
					)}
				</fieldset>
				<fieldset className='text-left mb-4'>
					<input
						type="email"
						id="email"
						placeholder="Escreva seu email"
						className='w-full block bg-black rounded p-2 text-white'
						onChange={handleInputChange}
						value={inputsRegister.email}
					/>
					{validateEmail(inputsRegister.email).error && (
						<small className='text-red-400 font-normal'>{validateEmail(inputsRegister.email).message}</small>
					)}
				</fieldset>
				<fieldset className='text-left mb-4'>
					<input
						type="password"
						id="password"
						placeholder="Escreva sua senha"
						className='w-full block bg-black rounded p-2 text-white'
						onChange={handleInputChange}
						value={inputsRegister.password}
					/>
					{validatePassword(inputsRegister.password).error && (
						<small className='text-red-400 font-normal'>{validatePassword(inputsRegister.password).message}</small>
					)}
				</fieldset>
				<fieldset className='text-left mb-4'>
					<input
						type="password"
						id="confirmPassword"
						placeholder="Confirme sua senha"
						className='w-full block bg-black rounded p-2 text-white'
						onChange={handleInputChange}
						value={inputsRegister.confirmPassword}
					/>
					{validateConfirmPassword(
						inputsRegister.password,
						inputsRegister.confirmPassword
					).error && (
						<small className='text-red-400 font-normal'>
							{
								validateConfirmPassword(
									inputsRegister.password,
									inputsRegister.confirmPassword
								).message
							}
						</small>
					)}
				</fieldset>
				<div>
					<button className='bg-green-400 p-3 w-full mt-4 mb-2 rounded-lg font-bold shadow cursor-pointer hover:bg-green-500 transition hover:text-white ' type="submit" disabled={habilityButton}>Registrar</button>
				</div>
				<Link to='/' className='text-blue-400 hover:text-green-500 transition'>Voltar ao Login</Link>
			</form>
		</div>
	);
}
