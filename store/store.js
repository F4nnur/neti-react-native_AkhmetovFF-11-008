import { createContext } from 'react';
import { ClickStore } from '../modules/ClickerModule/ClickStore';
import { TodoStore } from '../modules/TodoModule/TodoStore';
import { LogsStore } from '../modules/LogsModule/LogsStore';

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
