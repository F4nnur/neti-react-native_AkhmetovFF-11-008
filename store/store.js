import { createContext } from 'react';
import { ClickStore } from './ClickStore';

class RootStore {
  clickerStore;

  constructor() {
    this.clickerStore = new ClickStore();
  }
}

export const store = new RootStore();

export const storesContext = createContext(store);
