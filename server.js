const http = require("http");
const server = http.createServer((req,res)=>{
    console.log(req.url , req.method);
    res.write("<html><h1>Hello</h1></html>");
});
server.listen(3000,'localhost',()=>{
    console.log("Listening on port no. 3000");
});