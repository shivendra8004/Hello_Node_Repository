const fs = require('fs');

const readStream = fs.createReadStream("./docs/blog2.txt",{encoding: 'utf8'});

readStream.on("data",(chunk)=>{
    console.log("-------New Chunk-------");
    console.log(chunk);
})