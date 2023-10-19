const http = require('http');


const server = http.createServer((req,res)=>{

    console.log("Lohith");
    res.write('<html>')
    res.write('<head>Lohith</head>')
    res.write('</html>')
    res.end();
})

server.listen(4000);