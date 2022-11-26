const fs = require("fs"); // Fs stands for file system

// Directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log("Error");
    }
    console.log("Folder Created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log("Error");
    }
    console.log("Folder deleted");
  });
}

// Deleting Files
