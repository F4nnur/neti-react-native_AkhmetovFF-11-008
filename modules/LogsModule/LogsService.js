import LocalRepository from '../../local/LocalRepository';

export default class LogsService {
  localRepository;

  constructor() {
    this.localRepository = new LocalRepository('Logs');
  }

  getLogs = async () => {
    return await this.localRepository.getItems();
  };
  addLogs = async value => {
    await this.localRepository.setItems(value);
    return await this.localRepository.getItems();
  };

  deleteLogs = async () => {
    await this.localRepository.removeAll();
  };
}
