import { ICommand } from './ICommand';

export class RemoveCustomer implements ICommand {
  excute(): void {
    console.log('Removeing a Customer');
  }
}
