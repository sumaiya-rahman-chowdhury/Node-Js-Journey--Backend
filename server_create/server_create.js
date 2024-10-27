const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('This is my Home Page')
    }
    else if(req.url === '/about'){
        res.end('This is about Page')
    }
    else if(req.url === '/contact'){
        res.end('This is Contact Page')
    }
    else{
        res.end('404, Resource Not Found'); 
    }
})

server.listen(5001,()=>{
    console.log("Server is running")
})