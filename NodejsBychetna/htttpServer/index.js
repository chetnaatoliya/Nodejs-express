  const http = require('http');
  const fs = require("fs");


  // const server = http.createServer((req,res) => {
  //   console.log(req.url);
  //   res.end("i'm unstoppable");
  // });
  const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`);
    //  console.log(data
      const objData = JSON.parse(data);
    // console.log(req.url);

    if (req.url == "/") {
        res.end("hello from the home sides");
    } else if (req.url == "/about") {
        res.end("hello from  AboutUS side ");
    } else if (req.url == "/contact") {
        res.end("hello from contactUS sides ");
    } else if (req.url == "/userapi") {
        res.writeHead(200,{"Content-Type": "application/json"});
    
          res.end(objData[2].first_name);
            
            res.end(objData[0].name);
        
      
            fs.readFile(
                `${__dirname}/UserApi/userapi.json`,
                "utf-8",
                (err, data) => {
                    console.log(data);
                    res.end(data);
                });      
    }     
    else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1> 404 error pages. Page doesn't exist </h1>");
    }
 });
        server.listen(8000, "127.0.0.1", () => {
        console.log("listening to the port no 8000");
        });
 