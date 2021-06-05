import { ICompressor } from './compressor/ICompressor';
import { IFilter } from './filter/IFilter';

export class ImageStore {
  constructor(private compressor: ICompressor, private filter: IFilter) {}
  store() {
    this.filter.apply();
    this.compressor.compress();
    console.log('stored the image');
  }
}
