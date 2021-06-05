import { DesignPattern } from '../types';
import { AddCustomer } from './commands/addCustomer';
import { RemoveCustomer } from './commands/RemoveCustomer';
import { Button } from './fx/Button';

const paternName = 'command';

const runPattern = () => {
  const addCustomerCommand = new AddCustomer();
  const removeCustomerCommand = new RemoveCustomer();
  const addCustomerButton = new Button(addCustomerCommand);
  const removeustomerButton = new Button(removeCustomerCommand);
  addCustomerButton.click();
  removeustomerButton.click();
};

const command: DesignPattern = {
  paternName,
  runPattern,
};

export default command;
