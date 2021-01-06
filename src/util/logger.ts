import chalk  from 'chalk';
import _ from 'lodash';

const logger = console.log;

export function info(stack: any) {
    let args = stack;
    if(typeof stack === 'object') {
        // turn the object to a string so we
        // can log all the properties and color it
        args =  JSON.stringify(stack, null, 2);
    };
    logger(chalk.green(`[ ✨ INFO ✨ ]: `) + args);

}
export function warn(stack: any) {
    let args = stack;
    if(typeof stack === 'object') {
        // turn the object to a string so we
        // can log all the properties and color it
        args =  JSON.stringify(stack, null, 2);
    };
    logger(chalk.red(`[ ❌ ERROR ❌ ]: `) + args);
}

export function debug(stack: any) {
    let args = stack;
    if(typeof stack === 'object') {
        // turn the object to a string so we
        // can log all the properties and color it
        args =  JSON.stringify(stack, null, 2);
    };
    logger(chalk.magentaBright(`[ ✍️  DEBUG ✍️ ]: `) + args);
}
