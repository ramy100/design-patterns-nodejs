import { DesignPattern } from '../types';
import { DataSource } from './datasource/DataSource';
import { Chart } from './observers/Chart';
import { SpreadSheet } from './observers/SpreadSheet';

const paternName = 'observer';
const runPattern = () => {
  const dataSource = new DataSource(10);
  const spreadSheet = new SpreadSheet(dataSource.value);
  const chart = new Chart(dataSource.value);
  const spreadSheetObserverId = dataSource.addObserver(spreadSheet);
  const chartObserverId = dataSource.addObserver(chart);
  dataSource.setValue = dataSource.value + 1;
  dataSource.setValue = dataSource.value + 5;
  dataSource.setValue = dataSource.value + 10;
};

const observer: DesignPattern = {
  paternName,
  runPattern,
};

export default observer;
