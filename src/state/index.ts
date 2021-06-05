import { DesignPattern } from '../types';
import { Brush } from './tools/Brush';
import { Canvas } from './Canvas';
import { Pen } from './tools/Pen';
const paternName = 'state pattern';
const runPattern = () => {
  const penTool = new Pen();
  const brushTool = new Brush();
  const canvas = new Canvas();
  canvas.setTool = penTool;
  canvas.toolDraw();
  canvas.setTool = brushTool;
  canvas.toolDraw();
};

const statePattern: DesignPattern = {
  paternName,
  runPattern,
};

export default statePattern;
