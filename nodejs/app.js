const http = require('http')
const url = require('url')
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.end('Hello World\n')
    var params = url.parse(req.url, true).query;
    console.log(params)
})
server.listen(port,hostname,()=>{
    console.log('server running ')
})