const http = require('http');
const fs = require('fs');


// const server = http.createServer((req,res)=>{
//     let url=req.url;
//     console.log("Lohith");
//     if(url==="/"){
//         res.write('<html>')
//         res.write('<body><h1>Hello from my Node.js Server</h1></body>')
//         res.write('</html>')
//         res.end();
//     }else if(url=="/home"){
//         res.write('<html>')
//         res.write('<body><h1>Welcome Home</h1></body>')
//         res.write('</html>')
//         res.end();
//     } else if(url=="/about"){
//         res.write('<html>')
//         res.write('<body><h1>Welcome to About Us page</h1></body>')
//         res.write('</html>')
//         res.end();
//     }else if(url=="/node") {
//         res.write('<html>')
//         res.write('<body><h1> Welcome to my Node Js project</h1></body>')
//         res.write('</html>')
//         res.end();
//     }else{
//         res.write('<html>')
//         res.write('<body><h1>Page Does not Exists!!!!</h1></body>')
//         res.write('</html>')
//         res.end();
//     }
// })

// server.listen(4000);


const server = http.createServer((req,res)=>{
    let url=req.url;
    // console.log("Lohith");
    if(url==="/"){
        console.log("Lohith");
        res.write('<html>')
        const data = fs.readFileSync('message.txt',{encoding: 'utf8'});
        console.log(data);
        res.write(`<p>${data}</p>`)
        res.write('<body><form action="/message" method="POST"><input type="text" name ="message"><button type="submit">Send</button></body>')
        res.write('</html>')
        return res.end();
    }
    if(url==="/message" && req.method=='POST'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        })
        req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt',message,(err)=>{
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        })
        
       
    }
})

server.listen(4000);