import { Logger } from '../Logger';
import { Task } from './Task';

export class PaymentTask extends Task {
  constructor(logger: Logger) {
    super(logger);
  }

  protected doExcute() {
    console.log('Payment Task Running ...');
  }
}
