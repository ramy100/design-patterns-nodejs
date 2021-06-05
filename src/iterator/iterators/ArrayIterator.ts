import { IIterator } from './IIterator';

export class ArrayIterator<T> implements IIterator {
  constructor(private arr: T[]) {}

  next() {
    this.arr.pop();
    return this.arr[this.arr.length - 1];
  }
  hasnext() {
    return this.arr.length > 0;
  }
  current() {
    return this.arr[this.arr.length - 1];
  }
}
