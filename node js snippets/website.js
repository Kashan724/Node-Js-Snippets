const {Console} = require('console');
const fs = require('fs');
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    res.statusCode=200 // rs = response 200 for OK
    res.setHeader('Content-type','text/html')
    console.log(req.url);
    if(req.url == '/'){
        res.statusCode=200
        res.end('<h1>This is Kashan here</h1><p>I like anime </p>');
    }
    else if(req.url == '/about'){
        res.statusCode=200;
        res.end('<h1>About Kashan here</h1><p>I like anime </p>');
    }
    else if(req.url == '/hello'){
        res.statusCode=200;
        const data = fs.readFileSync('index.html')  // reading html file
        res.end(data.toString());
    }

    else{
        //res.kashan();
        res.statusCode=400; // Not found
        res.end('<h1>Page not found</h1>')
    }
   
    


})
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
});