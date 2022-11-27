const http = require('http');

const server =  http.createServer((req, res)=>{
    console.log(req.url+ "  "+ req.method);

    // Set Header Content type
    res.setHeader('Content-Type','text/html');
    res.write("</p>Badhiya Yrr</p>");
    res.write("</p>Nice Yrr</p>");
    res.end();
});

server.listen(3000, 'localhost',()=>{
    console.log("Listening for request on porn no. 3000");
});