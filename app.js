const http = require('http');
const routes = require('./routes')

const express = require('express');

const bodyParser = require('body-parser');

const app= express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/',(req,res,next)=>{
    console.log('this alaways runs');
    next();
})

app.use('/add-product',(req,res,next)=>{
    console.log('In the middleware');
    res.send('<body><form action="/product" method="POST"><input type="text" name ="title" placeholder="Enter the product"> <input type="text" name ="size" placeholder="Enter size"> <button type="submit">Send</button></body>')
 
})

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
});

app.use('/',(req,res,next)=>{
    console.log('In another middleware');
    res.send('<h1>hello to node js</h1>')
})



app.listen(4000);