import readline from 'readline';
import command from './command';
import iterator from './iterator';
import momento from './momento';
import observer from './observer';
import state from './state';
import strategy from './strategy';
import templateMethod from './templateMethod';
import { DesignPattern } from './types';

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const patternsToChooseFrom: DesignPattern[] = [
  momento,
  state,
  iterator,
  strategy,
  templateMethod,
  command,
  observer,
];

let questionString = '\nAvailable patterns';
patternsToChooseFrom.forEach((pattern, index) => {
  questionString += `\n${index} : ${pattern.paternName}`;
});
console.log(questionString);
r1.prompt();

const chooseDesignPattern = () => {
  r1.on('line', (input) => {
    if (patternsToChooseFrom[+input]) patternsToChooseFrom[+input].runPattern();
    else console.log('Wrong answer!', questionString);
  });
};

chooseDesignPattern();
