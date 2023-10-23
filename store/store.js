import { createContext } from 'react';
import { ClickStore } from './ClickerModule/ClickStore';
import { TodoStore } from './TodoModule/TodoStore';

class RootStore {
  clickerStore;
  todoStore;

  constructor() {
    this.clickerStore = new ClickStore();
    this.todoStore = new TodoStore();
  }
}

export const store = new RootStore();

export const storesContext = createContext(store);
