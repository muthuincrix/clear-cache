//Imports
const express = require("express");

const path = require("path");
const cors = require("cors");






const app = express();


//Initlization
require("dotenv").config();


//Middleware

app.use(express.json());
app.use(express.text());

//MongoBD Connection

app.use(cors())
//Application Route

// application

app.use("/", express.static(path.join(__dirname, "./build")));
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./build", "index.html"));
  });
  app.get("/login", (req, res) => {
    res.json({Stats:"success",message:"clear cache"})
  });
//Server
app.listen(1338, () => {
  console.log(`Server start at port : ${process.env.PORT}`);
});


  
