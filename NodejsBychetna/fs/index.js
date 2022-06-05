const fs = require("fs");

// fs.mkdir("thapa" , (err) => {

// });

// fs.writeFile("thapa/bio.txt", "hello im your future cracker",
// (err) => { 
//     console.log("created");
// });

// fs.appendFile("thapa/bio.txt", "good evening",
// (err) => {}); 

// fs.readFile("thapa/bio.txt", 
// 'utf-8', (err, data) => {
//     console.log(data);
// });

fs.rename("thapa/bio.txt", "thapa/myNode.txt", (err) => {
    console.log("rename is done");
})