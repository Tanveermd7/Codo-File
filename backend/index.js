const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const mongoose = require('mongoose');
const express = require('express');
const app = new express();
const PORT = process.env.PORT ;
const corsConfig = {
    origin:"*",
    credential: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
};
app.options("", cors(corsConfig));



const uri = 

require('./db/conn'); 

app.use(cors(corsConfig)); 
app.use(express.json()); 
app.use(require('./router/auth'));

const consoleURL = (req,res,next)=>{
    console.log(`User at URL : localhost:${PORT}${req.url}`);
    next();
}

app.get('/',consoleURL,(req,res)=>{
    // res.cookie("test","tanveer");
    res.send('Hello world');
})
app.get('*',consoleURL,(req,res)=>{
    res.send(`<center><h1>404 </h1><h3>The Page you are Looking for is Not Found</h3></center>`)
})

app.listen(PORT,()=>{
    console.log(`localhost:${PORT}`)
})