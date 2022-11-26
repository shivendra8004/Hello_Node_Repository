const fs = require('fs');

const readStream = fs.createReadStream("./docs/blog2.txt",{encoding: 'utf8'});
const writeStream = fs.createWriteStream("./docs/blog3.txt");


// Piping : it does same work as above function but more effectively and efficiently

readStream.pipe(writeStream);