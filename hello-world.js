const http = require('http');  //importing the http package

const server = http.createServer((req, res)=> {    //using createServer method which takes in two arguments request and response
    res.end('Hello World\n');   // this will display in browser in localhost port number below
});

server.listen(4242, () => {    //port number can be anything we want
    console.log('Server is running ....');   // not mandatory, just for our understanding that server is running
});