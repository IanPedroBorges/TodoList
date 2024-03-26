import { TodoList } from "../interfaces/todo/TodoInterface";
import TodoModel from "../Model/TodoModel";
import { NewEntity } from "../interfaces";
import { ServiceResponse } from "../interfaces/ServiceResponse";
import { UserReturn } from "../interfaces/users/UserInterface";
import UserModel from "../Model/UserModel";

export default class TodoService {
    constructor(private model = new TodoModel(), private userModel = new UserModel()) {}

    async findAllByUserId(id: number): Promise<ServiceResponse<TodoList[]>> {
        const todos = await this.model.findAllByUserId(id);
        if (!todos) return {status: 'notFound', data: {message: 'Nenhum todo encontrado'}};
        return {status: 'ok', data: todos};
    }

    async create(todo:NewEntity<TodoList>, user: UserReturn): Promise<ServiceResponse<TodoList>> {
        const user_id = await this.userModel.findByEmail(user.email);
        if (!user_id) return {status: 'notFound', data: {message: 'Usuário não encontrado'}};
        const newTodo = await this.model.createTodo({...todo, user_id: user_id.id});
        if (!newTodo) return {status: 'internalServerError', data: {message: 'Erro ao criar todo'}};
        return {status: 'created', data: newTodo};
    }

    async delete(id: number): Promise<ServiceResponse<number>> {
        const deleted = await this.model.deleteTodoById(id);
        if (!deleted) return {status: 'notFound', data: {message: 'Todo não encontrado'}};
        return {status: 'ok', data: deleted};
    }

    async update(id: number, todo: TodoList): Promise<ServiceResponse<TodoList>> {
        const updated = await this.model.updateTodoById(id, todo);
        if (!updated) return {status: 'notFound', data: {message: 'Todo não encontrado'}};
        return {status: 'ok', data: updated};
    }
}