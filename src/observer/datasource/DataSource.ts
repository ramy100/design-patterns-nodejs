import { Observable } from '../observable/Observable';

export class DataSource extends Observable {
  constructor(private _value: number) {
    super();
  }

  get value() {
    return this._value;
  }

  set setValue(newValue: number) {
    this._value = newValue;
    this.notifyObservers(this._value);
  }
}
