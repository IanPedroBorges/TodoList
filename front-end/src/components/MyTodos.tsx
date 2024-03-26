import { Todos } from '../types/TodosType';
import { MdDelete } from 'react-icons/md';
import { GiConfirmed } from 'react-icons/gi';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa';
import { useState } from 'react';
import { dateFormated } from '../utils/dataFormated';
import { todosFilterFinish, todosFilterPending } from '../utils/todosFilter';

type MyProps = {
	todos: Todos[];
	delete: (id: number) => void;
	completed: (id: number) => void;
};

export default function MyTodos({ todos, delete: handleDelete, completed: handleCompleted}: MyProps) {
	const [log, setLog] = useState<number[]>([]);
	
	return (
		<section className="flex justify-center text-center flex-col items-center p-11">
			{todosFilterPending(todos).map((todo: Todos) => (
				<div
					key={todo.id}
					className="flex flex-col text-gray-100 text-center justify-center items-center w-full bg-cyan-900"
				>
					<ul className="flex flex-row justify-center w-2/3 text-center align-middle items-center p-5 relative">
						<li className="text-3xl mr-5 cursor-pointer"
							onClick={() => {
								if (log.includes(todo.id)) {
									setLog(log.filter((id) => id !== todo.id));
								} else {
									setLog([...log, todo.id]);
								}
							}}
						>{todo.title}</li>
						{log.includes(todo.id) ? (
							<FaArrowDown
								className="text-3xl text-green-600 cursor-pointer"
								onClick={() => setLog(log.filter((id) => id !== todo.id))}
							/>
						) : (
							<FaArrowRight
								className="text-3xl text-red-600 cursor-pointer"
								onClick={() => setLog([...log, todo.id])}
							/>
						)}
						<div className="absolute right-5 w-1/3">
							<button className="mr-8 text-red-600 text-xl p-5"
								onClick={() => handleDelete(todo.id)}
							>
								<MdDelete />
							</button>
							<button className="text-green-500 text-xl p-5"
								onClick={() => handleCompleted(todo.id)}
							>
								<GiConfirmed />
							</button>
						</div>
					</ul>
					<div className={`${log.includes(todo.id) ? 'flex flex-col p-10 relative w-3/4' : 'hidden'}`}>
						<p>{todo.description}</p>
						<p className='absolute right-0 bottom-0'>{dateFormated(todo.created_at)}</p>
					</div>
				</div>
			))}
			{todosFilterFinish(todos).length > 0 && 
				<div className='w-4/5'>
					<h1 className="text-3xl text-gray-100">Completed</h1>
					{todosFilterFinish(todos).map((todo: Todos) => (
						<div
							key={todo.id}
							className="flex flex-col text-gray-100 text-center justify-center items-center min-w-full bg-gray-950"
						>
							<ul className="flex flex-row justify-center w-full text-center align-middle items-center p-5 relative">
								<li className="text-3xl mr-5 cursor-pointer"
									onClick={() => {
										if (log.includes(todo.id)) {
											setLog(log.filter((id) => id !== todo.id));
										} else {
											setLog([...log, todo.id]);
										}
									}}
								>{todo.title}</li>
								{log.includes(todo.id) ? (
									<FaArrowDown
										className="text-3xl text-green-600 cursor-pointer"
										onClick={() => setLog(log.filter((id) => id !== todo.id))}
									/>
								) : (
									<FaArrowRight
										className="text-3xl text-red-600 cursor-pointer"
										onClick={() => setLog([...log, todo.id])}
									/>
								)}
								<div className="absolute right-5 w-1/3">
									<button className="mr-8 text-red-600 text-xl p-5"
										onClick={() => handleDelete(todo.id)}
									>
										<MdDelete />
									</button>
								</div>
							</ul>
							<div className={`${log.includes(todo.id) ? 'flex flex-col p-10 relative w-3/4' : 'hidden'}`}>
								<p>{todo.description}</p>
								<p className='absolute right-0 bottom-0'>{dateFormated(todo.created_at)}</p>
							</div>
						</div>
					))}
				</div>
			}
		</section>
	);
}
