import { Todos } from '../types/TodosType';

export const todosFilterFinish = (todos: Todos[]) => {
	return todos.filter((todo) => todo.status === 'completed');
};

export const todosFilterPending = (todos: Todos[]) => {
	return todos.filter((todo) => todo.status === 'pending');
};