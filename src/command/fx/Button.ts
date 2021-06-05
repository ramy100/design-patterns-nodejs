import { ICommand } from '../commands/ICommand';
import { IComponent } from './IComponent';

export class Button implements IComponent {
  constructor(private command: ICommand) {}
  click(): void {
    this.command.excute();
  }
}
