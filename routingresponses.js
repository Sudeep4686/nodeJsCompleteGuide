// const http = require('http');

// http.createServer((req,res)=>{
//     const url = req.url;
//     if (url==='/'){
//         res.write('<html>');
//         res.write('<h1>welcome to my nodejs project</h1>');
//         res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>');
//         res.write('</html>')
//         return res.end();
//     }
//     res.setHeader("Content-Type","text/html");
//     res.write('<html>');
//     res.write('<h1>welcome to my nodejs project</h1>');
//     res.write('</html>')
//     res.end();

// }).listen(3000);
