const fs = require("fs")
//{create folder/directory}
// fs.mkdirSync("chetna");
// console.log("hey chetna");

//{create txt file throw writefile | add data | or add more data throw append file}
// fs.writeFileSync("demo.txt" , "hello");
// fs.appendFileSync("demo.txt", "world");

//{read data or show binary form data with the help of buf_data}
//{then add org_data to to.String() to show original data}
//{or shortally we see to add utf-8 that help data read org form not given binary data}
const buf_data = fs.readFileSync("demo.txt", 'utf-8');
// console.log(buf_data); 
// console.log("successfull");
// const org_data = buf_data.toString();
  console.log(buf_data);

  //delete file 
  fs.unlinkSync('demo.txt');

  //{remove directory or folder}
fs.rmdirSync('chetna');
