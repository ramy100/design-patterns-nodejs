import { DesignPattern } from '../types';
import { Jpeg } from './compressor/Jpeg';
import { BW } from './filter/BW';
import { ImageStore } from './ImageStrore';
const paternName = 'strategy';

const runPattern = () => {
  const jpegCompressor = new Jpeg();
  const bwFilter = new BW();
  const imageStorage = new ImageStore(jpegCompressor, bwFilter);
  imageStorage.store();
};

const strategy: DesignPattern = {
  paternName,
  runPattern,
};

export default strategy;
