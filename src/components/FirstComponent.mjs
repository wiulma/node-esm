import Logger from './Logger';

function FirstComponent() {

    this.prop = "prop";

    console.log("constructor FirstComponent");

    this.log = function() {
        Logger.log('first component');
        Logger.inc();
        Logger.log();
    }

    this.setProp = function(p) {
        this.prop = p;
    }

    this.logProp = function() {
        console.log(`FirstComponent prop = ${this.prop}`);
    }

}
export default FirstComponent