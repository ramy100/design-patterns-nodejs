import { DesignPattern } from '../types';
import { Editor } from './Editor';
import { History } from './History';
const paternName = 'momento';

const runPattern = () => {
  const editor = new Editor();
  const history = new History();

  editor.content = '1';
  history.push(editor.createState());
  editor.content = '2';
  history.push(editor.createState());
  editor.content = '3';
  history.push(editor.createState());

  // undo
  editor.restore(history.pop()!);
  console.log(editor); //3
  editor.restore(history.pop()!);
  console.log(editor); //2
  editor.restore(history.pop()!);
  console.log(editor); //1
};

const momentoPattern: DesignPattern = {
  paternName,
  runPattern,
};

export default momentoPattern;
