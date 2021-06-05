import { IObserver } from './IObserver';

export class SpreadSheet implements IObserver {
  constructor(private value: number) {}

  update(newValue: number): void {
    this.value = newValue;
    console.log(`New value changed in spread sheet to ${this.value}`);
  }
}
