//imports
// const express = require('express')

import express  from "express";
import dontenv from "dotenv";
import colors from "colors"
import connectDB from "./config/db.js";

//dot env config
dontenv.config()

//mongodb connection
connectDB()

//rest object
const app=express();

//routes
app.get("/",(req,res)=>{
 res.send('<h1> welcome to job portal here </h1>')
})

//port
const PORT =process.env.PORT || 8080

//listen
app.listen(PORT,()=>{
    console.log(`server running ${process.env.DEV_MODE} on ${PORT}`
    .bgCyan.white)
})