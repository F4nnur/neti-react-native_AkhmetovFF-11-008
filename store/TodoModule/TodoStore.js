import TodoService from './TodoService';
import { makeAutoObservable } from 'mobx';

export class TodoStore {
  todoModel = null;
  isLoading = false;
  todoService;

  constructor() {
    makeAutoObservable(this);
    this.todoService = new TodoService();
  }

  getTodoObjectFromService = () => {
    const model = this.todoService.getAndPrepareDataForStore();
    this.setTodoModel(model);
  };

  actionAdd = (text, isComplete, uri) => {
    this.setIsLoading(true);
    const model = this.todoService.addTodo(text, uri, isComplete, this.todoModel);
    this.setTodoModel(model);
    this.setIsLoading(false);
  };

  actionDelete = index => {
    this.setIsLoading(true);
    const model = this.todoService.deleteTodo(this.todoModel, index);
    this.setTodoModel(model);
    this.setIsLoading(false);
  };

  actionComplete = index => {
    this.setIsLoading(true);
    const model = this.todoService.completeTodo(this.todoModel, index);
    this.setTodoModel(model);
    this.setIsLoading(false);
  };

  actionGetCompleteTodos = data => {
    const model = this.todoService.getCompletedTodos(data);
    return model;
  };

  setIsLoading = value => {
    this.isLoading = value;
  };

  setTodoModel = value => {
    this.todoModel = value;
  };
}
