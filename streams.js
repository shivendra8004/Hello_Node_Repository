const fs = require("fs");

const readStream = fs.createReadStream("./views/index.html", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./views/index1.html", {
  encoding: "utf8",
});

readStream.on("data", (data) => {
  writeStream.write("\n New Chunk Of Data \n");
  writeStream.write(data);
});
