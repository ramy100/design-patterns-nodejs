import { Logger } from '../Logger';

export abstract class Task {
  constructor(private logger: Logger) {}
  excute() {
    this.logger.record();
    this.doExcute();
  }

  protected abstract doExcute(): void;
}
