import { IObserver } from './IObserver';

export class Chart implements IObserver {
  constructor(private value: number) {}

  update(newValue: number): void {
    this.value = newValue;
    console.log(`New value changed in chart to ${this.value}`);
  }
}
