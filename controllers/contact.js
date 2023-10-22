const path =require('path');
const rootDir = require('../util/path.js');

exports.getContact=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'));
};

exports.postContact = (req,res,next)=>{
    res.send('<h1>Form successfuly filled<h1>');
};