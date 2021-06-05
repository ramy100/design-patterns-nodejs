export interface IIterator {
  next: () => any | undefined;
  hasnext: () => boolean;
  current: () => any;
}
