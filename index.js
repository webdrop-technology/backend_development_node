//console.log("WD");
require('dotenv').config()
const express=require('express');
const app=express();
const port=4000;


app.get('/',(req,res)=>{
    res.send("WD");
});

app.get('/twitter',(req,res)=>{
    res.send("Twitter");
});

app.get('/login',(req,res)=>{
    res.send("Login");
});

app.listen(process.env.PORT,()=>{
    console.log(`Example on listening on port ${process.env.PORT}`);
});

