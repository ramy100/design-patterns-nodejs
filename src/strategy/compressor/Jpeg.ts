import { ICompressor } from './ICompressor';

export class Jpeg implements ICompressor {
  compress() {
    console.log('Compressing using JPEG');
  }
}
