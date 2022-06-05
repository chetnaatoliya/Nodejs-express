import chalk from "chalk";
// console.log(chalk.red.inverse(false));

import validator from 'validator';

const res =validator.isEmail('chetna@atoliya.com');
// console.log (chalk.green.inverse(result));
console.log (res? chalk.green.inverse(res):chalk.red.inverse(res));
