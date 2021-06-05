import { IObserver } from '../observers/IObserver';
import { v4 as uuidv4 } from 'uuid';

export abstract class Observable {
  private _observers: { id: string; observer: IObserver }[] = [];

  addObserver(observer: IObserver) {
    const id = uuidv4();
    this._observers.push({ id, observer });
    return id;
  }

  removeObserver(id: string) {
    this._observers = this._observers.filter((observer) => observer.id !== id);
  }

  notifyObservers(value: any) {
    this._observers.forEach((observer) => observer.observer.update(value));
  }
}
