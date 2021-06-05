import { IIterator } from './iterators/IIterator';

export class BrowserHistory {
  private _iterator: IIterator | undefined = undefined;
  private _history: string[];
  constructor() {
    this._history = [];
  }
  createIterator(iterator: IIterator) {
    console.log('this.history', typeof this.history);
    this._iterator = iterator;
  }

  push(url: string) {
    this.history.push(url);
  }

  get iterator(): IIterator | undefined {
    return this._iterator;
  }
  get history() {
    return this._history;
  }
}
