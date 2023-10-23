import { createContext } from 'react';
import { ClickStore } from './ClickerModule/ClickStore';
import { TodoStore } from './TodoModule/TodoStore';
import { LogsStore } from './LogsModule/LogsStore';

class RootStore {
  clickerStore;
  todoStore;
  logsStore;

  constructor() {
    this.clickerStore = new ClickStore();
    this.todoStore = new TodoStore();
    this.logsStore = new LogsStore();
  }
}

export const store = new RootStore();

export const storesContext = createContext(store);
