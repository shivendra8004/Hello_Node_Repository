const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  const num = _.random(10, 30);

  res.setHeader("Content-Type", "text/html");
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/home":
      res.setHeader("Location", "/");
      res.statusCode = 301;
      res.end();
      break;

    case "/help":
      path += "help.html";
      res.statusCode = 200;
      break;
    case "/helpMe":
      res.statusCode = 301;
      res.setHeader("Location", "/help");
      res.end();
      break;

    case "/about":
      path += "about.html";
      res.setHeader = 200;
      break;
    case "/aboutMe":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;

    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      res.write(err);
      res.end();
    } else {
      const greet = _.once(() => {
        res.write("Hello");
      });
      greet();
      greet();
      res.write(num.toString());
      res.write(data);
      res.end();
      console.log("Working successfully on " + req.url + " url");
    }
  });
});
server.listen(3000, "localhost", () => {
  console.log("Listening On Port No. 3000");
});
