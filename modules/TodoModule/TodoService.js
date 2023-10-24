import TodoRepository from './TodoRepository';
import { TodoModel } from './TodoModel';

export default class TodoService {
  todoRepository;

  constructor() {
    this.todoRepository = new TodoRepository();
  }

  getAndPrepareDataForStore = () => {
    const data = this.todoRepository.getData();

    const model = new TodoModel();
    model.todos = data.todos;
    return model;
  };

  addTodo = (text, uri, isComplete, model) => {
    model.todos.push({ text: text, isComplete: isComplete, image: uri });
    return model;
  };

  deleteTodo = (model, index) => {
    model.todos.splice(index, 1);
    return model;
  };

  completeTodo = (model, index) => {
    model.todos[index].isCompleted = !model.todos[index].isCompleted;
    return model;
  };

  getCompletedTodos = data => {
    return data.filter(item => item.isCompleted);
  };
}
