import { makeAutoObservable } from 'mobx';
import LogsService from './LogsService';

export class LogsStore {
  logs = [];
  logsService;

  constructor() {
    makeAutoObservable(this);
    this.logsService = new LogsService();
  }
  // getLogsObjectFromService = async () => {
  //   const data = await this.logsService.getLogs();
  //   this.setLogs(data);
  // };
  setLogs = value => {
    this.logs.push(value);
  };

  removeLogs = () => {
    this.logs = [];
  };
  actionForAnyOperation = async value => {
    this.setLogs(await this.logsService.addLogs(value));
  };

  actionDeleteLogsFromLocal = async () => {
    await this.logsService.deleteLogs();
    this.removeLogs();
  };
}
