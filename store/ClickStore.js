import { makeAutoObservable } from 'mobx';

export class ClickStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  actionClick = () => {
    this.setCount(++this.count);
  };

  secondActionClick = () => {
    this.setCount(0);
  };

  setCount = value => {
    this.count = value;
  };

  get doubleCount() {
    return this.count ** 2;
  }
}
