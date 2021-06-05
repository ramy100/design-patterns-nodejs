import { IFilter } from './IFilter';

export class BW implements IFilter {
  apply() {
    console.log('apply black and white filter');
  }
}
