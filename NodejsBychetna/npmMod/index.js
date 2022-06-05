import chalk from 'chalk';

// const validator =require("validator");
import validator from 'validator';
// console.log(chalk.red.italic.inverse('false'));

const res = validator.isEmail('chetna@atoliya.com');

console.log(res ? chalk.green.inverse(res): chalk.red.inverse(res));