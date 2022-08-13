const express=require('express');
const path =require('path');
const app = express();

console.log(__dirname);
// console.log(path.join(__dirname,'../public'));
const publicDirectorypath=path.join(__dirname,'../public');
app.use(express.static(publicDirectorypath));
app.get('/home',(req,res)=>{
    res.send("hello! express");
})
app.listen(3000,()=>{
    console.log("port no. 3000");
})