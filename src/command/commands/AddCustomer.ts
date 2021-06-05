import { ICommand } from './ICommand';

export class AddCustomer implements ICommand {
  excute(): void {
    console.log('Adding a Customer');
  }
}
