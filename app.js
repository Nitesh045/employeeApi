const express= require('express');
const mongoose= require('mongoose');
const bodyparser= require('body-parser');
const cors= require('cors');


const app=express();
app.use(cors())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin"); // Update this with your actual origin
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const dotenv=require('dotenv');
dotenv.config();
const port=process.env.PORT
const database = require('./conn/db')


app.get('/',(req,res)=>{
    res.send("hello world")
})

const tablerouter= require('./routes/tableRoutes')
app.use(tablerouter)


const userdata= require('./routes/userRoutes');
app.use(userdata)

app.listen(port,()=>{
    console.log(`server listining at ${port}`)
})