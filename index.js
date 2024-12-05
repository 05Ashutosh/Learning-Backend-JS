require("dotenv").config();
console.log("Hello Its a backend");

const express = require("express"); // Require module syntax
// import express from "express";// comman js
const app = express();
const port = process.env.PORT;

// app.get("call back")
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("ashutosh");
});

app.get("/login", (req, res) => {
  res.send("<h1>Hi Its the backend eng</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.listen(port,()=>{
//     console.log("Backend is activated")
// })
