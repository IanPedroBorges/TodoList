import { useContext } from 'react';
import { userContext } from '../context/UserContext/UserContext';

export default function Header() {
	const { User } = useContext(userContext);
	return (
		<header className='flex justify-center text-center flex-col items-center p-11'>
			<h1 className='font-bold text-6xl text-gray-100'>Todo List</h1>
			<div className='flex flex-row justify-evenly text-center w-full mt-8 text-gray-100'>
				<h3>{`username: ${User?.username}`}</h3>
				<h3>{`email: ${User?.email}`}</h3>
				<h3 className={`${User?.role == 'admin' ? '' : 'hidden'}`}>Acessar Usuarios</h3>
			</div>
		</header>
	);
}
