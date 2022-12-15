const http = require("http");
const express = require('express');
const app = express();
app.use("/",(req,res,next)=>{
    console.log("Started Basic middleware that always runs");
    next();
});
app.use("/about",(req,res)=>{
    res.send("We are in about section");
});

app.listen(3000,'localhost',()=>{
    console.log("Listening on port no. 3000");
});




// const server = http.createServer((req,res)=>{
//     console.log(req.url , req.method);
//     res.write("<html><h1>Hello</h1></html>");
// });
// server.listen(3000,'localhost',()=>{
//     console.log("Listening on port no. 3000");
// });