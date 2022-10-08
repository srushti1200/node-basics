const http = require('http');

const server = http.createServer((req, res)=>{
    // console.log("server created");
    if(req.url=='/'){
        res.end('Welcome to our home Page');
    }
    else if(req.url=='/about'){
        res.end('Here is our short history');
    }
    // res.end("We can't seem find the page you are looking for ");
    else{


        res.end(`
        <h1> Oops! </h1>
        <p>We can't seem find the page you are looking for </p>
        <a href="/">back home</a>
        `)
    }
    
})

server.listen(5000);