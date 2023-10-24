import { makeAutoObservable } from 'mobx';
import LogsService from './LogsService';

export class LogsStore {
  logsModel = null;
  logsService;

  constructor() {
    makeAutoObservable(this);
    this.logsService = new LogsService();
  }

  getLogsObjectFromService = () => {
    const model = this.logsService.getAndPrepareDataForStore();
    this.setModel(model);
  };

  setModel = value => {
    this.logsModel = value;
  };

  actionForAnyOperation = value => {
    const model = this.logsService.addLogs(this.logsModel, value);
    this.setModel(model);
  };
}
