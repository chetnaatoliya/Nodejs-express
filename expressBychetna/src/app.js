const path = require('path');
const express = require('express');
const app = express();

// relative absolute
// console.log(__dirname);

// console.log(path.join(__dirname, "../public"));
//build middleware
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates");    

//to set the view engine
app.set("view engine", "hbs");
app.set("views", templatePath);

app.use(express.static(staticPath));

//template engine route
app.get("/", (req, res) => {
   res.render('index');
})

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/", (req, res) => {
  res.send("hello from the express");
});

app.listen(8000, () => {
  console.log("listening the port at 8000");

});

// function staticPath(staticPath) {
//   throw new Error('Function not implemented.');
// }

