const http = require(`http`);
const fs = require('fs');

http.createServer((req,res)=>{
    const url = req.url;
    const method =  req.method;
    if (url==='/'){
        fs.readFile("message.txt" , {encoding: "utf-8"},(err,data)=>{
            if (err){
                console.log(err);
            }
            console.log('data from file' + data);
            res.write(`<html>`);
            //res.write(`<h1>welcome to my nodejs project</h1>`);
            res.write(`<body>${data}</body>`)
            res.write(`<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`);
            res.write(`</html>`)
            return res.end();
        })

       
    }
    else if (url==='/message' && method ==='POST'){
        const body = [];
        req.on('data',(chunk) => {
            //console.log(chunk);
            body.push(chunk);
            // fs.readFileSync('Location/',message);
        });
            // res.statusCode = 302;
            // res.setHeader('Location','/');
            // return res.end();
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            
            const message = parsedBody.split('=')[1];
            
            fs.writeFile('message.txt',message,(err)=>{
                if(err){
                    console.log(err);
                }
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
           
        });
            // res.statusCode = 302;
            // res.setHeader('Location','/');
            // return res.end();
    }
    else{
        res.setHeader("Content-Type","text/html");  
        res.write(`<html>`);
        res.write(`<body><h1>welcome to my nodejs project</h1></body>`);
        res.write(`</html>`);
    //res.end();
    }
    // res.setHeader("Content-Type","text/html");  
    // res.write(`<html>`);
    // res.write(`<body><h1>welcome to my nodejs project</h1></body>`);
    // res.write(`</html>`);
    // res.end();

}).listen(4000);
