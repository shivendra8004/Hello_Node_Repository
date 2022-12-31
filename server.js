const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  let path = "./views/";
  switch (req.url) {
    case "/":
      path = path + "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path = path + "about.html";
      res.statusCode = 200;
      break;
    case "/help":
      path = path + "help.html";
      res.statusCode = 200; //Status code are the code that is send by the server to the browser to tell that weather the request is full filled or not
      break;
    default:
      path = path + "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      res.write(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening on Port No. 3000");
});
