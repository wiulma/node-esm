import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import Logger from './components/Logger'

Logger.log('hello world!');
Logger.inc(2);

const fc = new FirstComponent();
fc.log();
fc.setProp('testProp');
fc.logProp();

const sc = new SecondComponent();
sc.log();

const fc2 = new FirstComponent();
fc2.log();
fc2.logProp();
fc2.setProp('testProp2');
fc2.logProp();

Logger.log('this is the end of the world!');