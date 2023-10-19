const http = require('http');


const server = http.createServer((req,res)=>{
    let url=req.url;
    console.log("Lohith");
    if(url==="/"){
        res.write('<html>')
        res.write('<body><h1>Hello from my Node.js Server</h1></body>')
        res.write('</html>')
        res.end();
    }else if(url=="/home"){
        res.write('<html>')
        res.write('<body><h1>Welcome Home</h1></body>')
        res.write('</html>')
        res.end();
    } else if(url=="/about"){
        res.write('<html>')
        res.write('<body><h1>Welcome to About Us page</h1></body>')
        res.write('</html>')
        res.end();
    }else if(url=="/node") {
        res.write('<html>')
        res.write('<body><h1> Welcome to my Node Js project</h1></body>')
        res.write('</html>')
        res.end();
    }else{
        res.write('<html>')
        res.write('<body><h1>Page Does not Exists!!!!</h1></body>')
        res.write('</html>')
        res.end();
    }
})

server.listen(4000);