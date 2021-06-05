import { IIterator } from './IIterator';

export class ObjectIterator implements IIterator {
  private key: string = Object.keys(this.obj)[0];
  constructor(private obj: any) {}

  next() {
    delete this.obj[this.key];
    this.key = Object.keys(this.obj)[0];
    return this.obj[this.key];
  }

  current() {
    return this.obj[this.key];
  }

  hasnext() {
    return Object.keys(this.obj).length > 0;
  }
}
