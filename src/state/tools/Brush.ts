import { ITool } from './ITool';

export class Brush implements ITool {
  draw(): void {
    console.log('Brush draw');
  }
}
