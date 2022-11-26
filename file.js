const fs = require('fs'); // Fs stands for file system



// Directories
fs.mkdir('./assets',(err)=>{
    if(err){
        console.log("Error");
    }
    console.log("Folder Created");
});



// Deleting Files