const http = require('http')
const fs = require('fs')
const homePage = fs.readFileSync('index.html')
const homeStyle = fs.readFileSync('style.css')
const homeLogic = fs.readFileSync('browser_apps.js')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    else if(req.url === '/style.css'){
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(homeStyle);
        res.end();
    } 
    else if(req.url === '/browser_apps.js'){
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(homeLogic);
        res.end();
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