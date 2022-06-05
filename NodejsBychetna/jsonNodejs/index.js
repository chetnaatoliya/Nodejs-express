const fs = require("fs");
const bioData = {
    name: "chetna",
    age:26,
    job: "full stack developer",
};


const jsonData = JSON.stringify(bioData);
// const objData= JSON.parse(jsonData); 
// fs.writeFile("Json1.json" , jsonData, (err) => {
    // console.log("done");
// });
fs.readFile("json1.json" , "utf-8" ,(err, data) => {
    // console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
});