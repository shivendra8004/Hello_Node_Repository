const fs = require("fs");
const { isBuffer } = require("lodash");

// Reading Files

// fs.readFile('./views/index.html',(err,data)=>{  //   Asynchronus function
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log("Last Line");

// Writing the Files

// fs.writeFile("./views/test.txt", "Hello Shiva", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File Written Successfully");
// });

// Playing With Directories
// fs.mkdir("./testfolder", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File Created Successfully");
// });

// if (!fs.existsSync("./testfolder")) {
//   fs.mkdir("./testfolder", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("File Created Successfully");
//   });
// } else {
//   fs.rmdir("./testfolder", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("Folder Deleted Successfully");
//   });
// }
// //  Deleting Files

// if (fs.existsSync("./views/test.txt")) {
//   fs.rm("./views/test.txt", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("File Deleted");
//   });
// } else {
//   //   console.log("File does not exists");
//   fs.writeFile("./views/test.txt", "hello guys", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("File Created");
//   });
// }
