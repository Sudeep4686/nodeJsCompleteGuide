const http = require(`http`);

http.createServer((req,res)=>{
    console.log('sudeep');
    res.write("sudeep");
    res.end();
}).listen(4000);
