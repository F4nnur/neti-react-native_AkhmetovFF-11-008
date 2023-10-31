import { createContext } from 'react';
import { ClickStore } from '../modules/ClickerModule/ClickStore';
import { TodoStore } from '../modules/TodoModule/TodoStore';
import { LogsStore } from '../modules/LogsModule/LogsStore';
import { PostsStore } from '../modules/PostsModule/PostsStore';

class RootStore {
  clickerStore;
  todoStore;
  logsStore;
  postsStore;

  constructor() {
    this.clickerStore = new ClickStore();
    this.todoStore = new TodoStore();
    this.logsStore = new LogsStore();
    this.postsStore = new PostsStore();
  }
}

export const store = new RootStore();

export const storesContext = createContext(store);
