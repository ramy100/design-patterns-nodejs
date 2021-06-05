import { DesignPattern } from '../types';
import { Logger } from './Logger';
import { PaymentTask } from './task/PaymentTask';

const paternName = 'template method';

const runPattern = () => {
  const logger = new Logger();
  const Task = new PaymentTask(logger);
  Task.excute();
};

const templateMethod: DesignPattern = {
  paternName,
  runPattern,
};

export default templateMethod;
