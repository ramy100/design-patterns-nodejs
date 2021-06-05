import { ITool } from './tools/ITool';

export class Canvas {
  private tool: ITool | null = null;

  toolDraw() {
    this.tool?.draw();
  }

  set setTool(selectedTool: ITool) {
    this.tool = selectedTool;
  }
}
