const fs = require("fs"); // Fs stands for file system


if(fs.existsSync("./docs/blog2.txt")){
  fs.unlink("./docs/blog2.txt",(err)=>{
    if(err){
    console.log("Error");
    }
    console.log("Removed File");
  });
}

// Deleting Files
