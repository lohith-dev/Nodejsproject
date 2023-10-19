const fs = require('fs');

const requestHandler =(req,res)=>{
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
}
module.exports=requestHandler;
// module.exports.handler=requestHandler;
// module.exports.sometText="Helo sharpner";

// module.exports={
//     requestHandler,
//     someText: "Helo sharpner"
// }