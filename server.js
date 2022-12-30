const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url + " " + req.method);
  // Setting Header to Content Type
  res.setHeader("Content-Type", "text/html");
  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      // console.log(err);
      res.end(err);
    }
    // res.write(data);
    res.end(data);
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening on port no 3000");
});
