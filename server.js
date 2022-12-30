const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  let path = "./views/";
  switch (req.url) {
    case "/":
      path = path + "index.html";
      break;
    case "/about":
      path = path + "about.html";
      break;
    case "/help":
      path = path + "help.html";
      break;
    default:
      path = path + "404.html";
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      res.write(err);
      res.end();
    } else {
      console.log("On the " + path + " Page");
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening on Port No. 3000");
});
