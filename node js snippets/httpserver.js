// creating server
const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.statusCode=200 // rs = response 200 for OK
    res.setHeader('Content-type','text/html')
    res.end('<h1>This is Kashan here</h1><p>I like anime </p>');


})
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
});