const http = require('http');
const routes = require('./routes')

const express = require('express');

const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
const app= express();

app.use(bodyParser.urlencoded({extended:false}));


app.use('/admin',adminRoutes)
app.use('/shop',shopRoutes)

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not Found</h1>')
})



app.listen(4000);