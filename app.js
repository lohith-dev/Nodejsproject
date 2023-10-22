const http = require('http');
const routes = require('./routes')
const path =require('path')
const express = require('express');



const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js');
const contactRoutes = require('./routes/contact.js')
const app= express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))


app.use('/admin',adminRoutes)
app.use('/shop',shopRoutes)
app.use('/contactus',contactRoutes)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})



app.listen(4000,()=>{
console.log('listening at port 4000');
});