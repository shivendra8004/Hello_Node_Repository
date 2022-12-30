const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  // Setting Header to Content Type

  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello</h1>Hello Guys");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("Listening on port no 3000");
});
