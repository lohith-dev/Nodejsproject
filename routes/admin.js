const express = require('express');

const router = express.Router();


router.get('/add-product',(req,res,next)=>{
    console.log('In the middleware');
    res.send('<body><form action="/product" method="POST"><input type="text" name ="title" placeholder="Enter the product"> <input type="text" name ="size" placeholder="Enter size"> <button type="submit">Send</button></body>')
 
})

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
});


module.exports = router;