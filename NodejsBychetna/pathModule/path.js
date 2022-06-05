
const path = require("path");
// console.log(path.dirname('D:/backendnodejs/pathModule/path.js'));
// console.log(path.extname('D:/backendnodejs/pathModule/path.js'));
// console.log(path.basename('D:/backendnodejs/pathModule/path.js'));
// console.log(path.parse('D:/backendnodejs/pathModule/path.js'));

const myPath =path.parse('D:/backendnodejs/pathModule/path.js');
console.log(myPath.root);