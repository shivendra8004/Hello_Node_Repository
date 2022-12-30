const http = require("http");
const server = http.createServer((req, res) => {
  console.log("Request Made");
  console.log(req.url + " " + req.method);
});

server.listen(3000, "localhost", () => {
  console.log("Listening on port no 3000");
});
