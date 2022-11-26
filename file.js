const fs = require('fs'); // Fs stands for file system
// Writing Files
fs.writeFile('./docs/blog1.txt','Please Subscribe to my channel',()=>{
    console.log("File written");
});

fs.writeFile('./docs/blog2.txt','Please like my Videos',()=>{
    console.log("File 2 written");
});


// Directories




// Deleting Files