import { Link, useNavigate } from 'react-router-dom';
import { LoginType, initialLoginState } from '../types/LoginType';
import { useContext, useEffect, useState } from 'react';
import {
	validateEmail,
	validatePassword,
} from '../validations/ValidationsInputsUser';
import { FaRegEye, FaEyeSlash } from 'react-icons/fa';
import { LocalStorageContext } from '../context/LocalStorageContext/LocalStorageContext';
import axios from 'axios';
import { userContext } from '../context/UserContext/UserContext';

export default function Login() {
	const [inputsLogin, setInputsLogin] = useState<LoginType>(initialLoginState);
	const [showPassword, setShowPassword] = useState(false);
	const { login, setLogin } = useContext(LocalStorageContext);
	const { setToken, setUser } = useContext(userContext);
	const [remember, setRemember] = useState(false);
	const [errorMenssage, setErrorMenssage] = useState('');
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputsLogin({ ...inputsLogin, [event.target.id]: event.target.value });
	};

	const navigate = useNavigate();

	useEffect(() => {
		if (login.email !== '') {
			setInputsLogin(login);
			setRemember(true);
		} else {
			setInputsLogin({
				email: '',
				password: '',
			});
			setRemember(false);
		}
	}, []);

	const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (remember) {
			setLogin(inputsLogin);
		} else {
			setLogin({
				email: '',
				password: '',
			});
		}
		try {
			const {data} = await axios('http://localhost:3001/users/login', {
				method: 'POST',
				data: inputsLogin,
			});
			setToken(data.Token);
			setUser(data.User);
			navigate('/home');
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setErrorMenssage(error.response.data.message);
		}
	};

	return (
		<div className="bg-stone-200 min-h-screen flex items-center justify-center">
			<form
				onSubmit={handleLogin}
				className="bg-white px-16 py-12 rounded-2xl shadow-xl text-center w-100 relative"
			>
				<h1 className="text-6xl mb-10">Login</h1>
				<fieldset className="text-left mb-4">
					<input
						type="text"
						id="email"
						placeholder="Escreva seu email"
						autoFocus
						className="w-full block bg-black rounded p-2 text-white"
						onChange={handleInputChange}
						value={inputsLogin.email}
					/>
					{validateEmail(inputsLogin.email).error && (
						<small className="text-red-400 font-normal">
							{validateEmail(inputsLogin.email).message}
						</small>
					)}
				</fieldset>
				<fieldset className="text-left mb-4">
					<input
						type={showPassword ? 'text' : 'password'}
						id="password"
						placeholder="Escreva sua senha"
						className="w-full block bg-black rounded p-2 text-white"
						onChange={handleInputChange}
						value={inputsLogin.password}
					/>
					<p
						className="absolute right-10 top-60 cursor-pointer"
						onClick={() => setShowPassword(!showPassword)}
					>
						{showPassword ? <FaRegEye /> : <FaEyeSlash />}
					</p>
					{validatePassword(inputsLogin.password).error && (
						<small className="text-red-400 font-normal">
							{validatePassword(inputsLogin.password).message}
						</small>
					)}
				</fieldset>
				<fieldset>
					<button
						type="submit"
						className="bg-green-400 p-3 w-full mt-4 rounded-lg font-bold shadow cursor-pointer hover:bg-green-500 transition hover:text-white "
						disabled={
							validateEmail(inputsLogin.email).error ||
              validatePassword(inputsLogin.password).error
						}
					>
            Login
					</button>
					{errorMenssage && (
						<small className="text-red-400 font-normal">{errorMenssage}</small>
					)}
					<div className="flex justify-between mt-3 items-center text-gray-500 ">
						<label
							htmlFor="remember"
							className="text-sm flex items-center cursor-pointer"
						>
							<input
								type="checkbox"
								id="remember"
								className="mr-1 accent-black cursor-pointer"
								onClick={() => setRemember(!remember)}
								checked={remember}
							/>
              lembrar-me
						</label>
						<Link
							to={'/register'}
							className="text-green-400 text-sm hover:text-neutral-950"
						>
              Register
						</Link>
					</div>
				</fieldset>
			</form>
		</div>
	);
}
