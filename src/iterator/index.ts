import { DesignPattern } from '../types';
import { ArrayIterator } from './iterators/ArrayIterator';
import { BrowserHistory } from './BrowserHistory';
import { ObjectIterator } from './iterators/ObjectIterator';
const paternName = 'iterator';
const runPattern = () => {
  const browserHistory = new BrowserHistory();
  browserHistory.push('soso');
  browserHistory.push('lolo');
  browserHistory.push('toto');
  browserHistory.createIterator(new ArrayIterator(browserHistory.history));
  while (browserHistory.iterator?.hasnext()) {
    console.log('current', browserHistory.iterator.current());
    browserHistory.iterator.next();
  }
};

const iterator: DesignPattern = {
  paternName,
  runPattern,
};

export default iterator;
