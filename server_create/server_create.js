const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Home Page</h1>')
        res.end()
    }
    else if(req.url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Me Page</h1>')
        res.end()
    }
    else if(req.url === '/contact'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Contact Page</h1>')
        res.end()
    }
    else{
        res.end('404, Resource Not Found'); 
    }
})

server.listen(5001,()=>{
    console.log("Server is running")
})