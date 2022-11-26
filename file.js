const fs = require('fs'); // Fs stands for file system

// Reading Files
fs.readFile('./docs/blog1.txt',(err,data)=>{
    if(err){
        console.log("Oops, There is a Error");
    }
    console.log(data.toString());
});

console.log("Last Line");
// setTimeout(()=>{
//     console.log("Last Line");
// },1000);
// Writing Files




// Directories




// Deleting Files