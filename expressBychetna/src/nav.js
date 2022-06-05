const express = require("express");
const app= express();

app.get("/", (req, res) =>{  
res.write("<h1>welcome to my home page</h1>");
res.write("<h1>welcome to my second home page</h1>");
res.send();      
});

app.get("/about", (req, res)=>{
    res.send("welcome to my about page.");
});

app.get("/contact", (req, res)=>{
    res.send("welcome to my contact page.")
});

app.get("/temp", (req, res)=>{
    res.send("welcome to my temp page."    )
}); 

app.listen(8000, ()=>{
    console.log("listining the port at 8000 ");
});

