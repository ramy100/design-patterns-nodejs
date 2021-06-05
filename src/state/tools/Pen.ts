import { ITool } from './ITool';

export class Pen implements ITool {
  draw(): void {
    console.log('Pen draw');
  }
}
