import Logger from './Logger';

function SecondComponent () {

    console.log("constructor SecondComponent");

    this.log = function() {
        Logger.log('first component');
        Logger.inc();
        Logger.log();
    }

}

export default SecondComponent