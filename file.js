const fs = require('fs');

// Reading Files

fs.readFile('./views/index.html',(err,data)=>{  //   Asynchronus function
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log("Last Line");