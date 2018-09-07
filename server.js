const http = require('http');
const server = http.createServer((request, response)=>{
  const user ={
    name:"amir",
    hobby:"programming"
  }
response.setHeader('content-type', 'text/html');
response.end(JSON.stringify(user));
})

server.listen(4000);
