import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { userContext } from '../context/UserContext/UserContext';
import Header from '../components/Header';
import { Todos } from '../types/TodosType';
import MyTodos from '../components/MyTodos';

export default function Todo() {
	const { token } = useContext(userContext);
	const [todos, setTodos] = useState<Todos[]>([]);
	const [carregando, setCarregando] = useState('');
	const [add, setAdd] = useState(false);
	const [inputs, setInputs] = useState({
		title: '',
		description: '',
	});

	useEffect(() => {
		const responseTodos = async () => {
			setCarregando('Carregando...');
			const response = await axios.get('http://localhost:3001/todos', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			if (response.status === 200) {
				setTodos(response.data);
				setCarregando('');
			} else {
				setTodos([]);
				setCarregando('Erro ao carregar');
			}
		};
		responseTodos();
	}, []);

	const handleClickDelete = async (id: number) => {
		const response = await axios.delete(`http://localhost:3001/todos/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (response.status === 200) {
			setTodos(todos.filter((todo) => todo.id !== id));
		}
	};

	const handleClickCompleted = async (id: number) => {
		const response = await axios.put(
			`http://localhost:3001/todos/${id}`,
			{
				status: 'completed',
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		if (response.status === 200) {
			setTodos(
				todos.map((todo) => {
					if (todo.id === id) {
						todo.status = 'completed';
					}
					return todo;
				})
			);
		}
	};

	const handleInputs = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputs({ ...inputs, [event.target.id]: event.target.value });
	};

	const handleClickAdd = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const response = await axios.post('http://localhost:3001/todos', inputs, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (response.status === 201) {
			setTodos([...todos, response.data]);
		}
		setAdd(false);
	};
	return (
		<main className="min-h-screen bg-stone-950">
			<Header />
			<button
				onClick={() => setAdd(!add)}
				className="text-slate-100 w-full text-center text-3xl hover:text-green-500"
			>
        Adicionar Todo
			</button>
			{add ? (
				<form
					onSubmit={handleClickAdd}
					className="w-2/4 flex flex-col justify-center text-center m-auto"
				>
					<label htmlFor="title" className="text-slate-100 mb-2">
            Title
					</label>
					<input
						type="text"
						id="title"
						className="mb-4"
						onChange={handleInputs}
					/>
					<label htmlFor="description" className="text-slate-100 mb-2">
            Description
					</label>
					<textarea
						id="description"
						className="mb-4"
						onChange={handleInputs}
					></textarea>
					<button
						type="submit"
						className="text-slate-100 bg-slate-400 hover:bg-green-500"
					>
            Adicionar
					</button>
				</form>
			) : (
				<MyTodos
					todos={todos}
					delete={handleClickDelete}
					completed={handleClickCompleted}
				/>
			)}
			<p>{carregando}</p>
		</main>
	);
}
