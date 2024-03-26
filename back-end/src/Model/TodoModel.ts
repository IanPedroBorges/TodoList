import { TodoList } from "../interfaces/todo/TodoInterface";
import SequelizeTodo from "../database/models/SequelizeTodo";
import { NewEntity } from "../interfaces";

export default class TodoModel{
    private model = SequelizeTodo;

  async findAllByUserId(id: number): Promise<TodoList[] | null> {
    const todos = await this.model.findAll({ where: { user_id: id } });
    if (!todos) return null;
    return todos;
  }

  async createTodo(todo: NewEntity<TodoList>): Promise<TodoList> {
    const newTodo = await this.model.create(todo);
    return newTodo;
  }

  async deleteTodoById(id: number): Promise<number> {
    const deleted = await this.model.destroy({ where: { id } });
    return deleted;
  };

  async updateTodoById(id: number, todo: TodoList): Promise<TodoList | null> {
    const updated = await this.model.update(todo, { where: { id } });
    if (updated) {
      const updatedTodo = await this.model.findOne({ where: { id } });
      return updatedTodo;
    }
    return null;
  }
}