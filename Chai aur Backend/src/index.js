// require ('dotenv').config({path :'./env'})

import dotenv from "dotenv"
import connectDb from "./db/index.js";

dotenv.config({path :'./env'})

connectDb()
.then(() => {

  app.on("error" , (error)=>{
    console.log("error :" , error);
    throw error
  }) 

  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });
})
.catch((err) => {
  console.log("mongo db connection failded !!! :"   , err);
})







// chat gpt code 

/*

import dotenv from 'dotenv';
import connectDb from './db/index.js';
import express from 'express';

// Load environment variables from .env file
dotenv.config({ path: './.env' });

// Initialize the app (assuming you are using Express)
const app = express();

// Connect to the database
connectDb()
  .then(() => {
    // Listen for errors
    app.on('error', (error) => {
      console.error('Error:', error);
      throw error;
    });

    // Start the server
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server is running at port ${port}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err);
  });


*/


































/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express"

const app = express()



;( async () => {
    try {
      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("error" , (error)=>{
        console.log("error :" , error);
        throw error
      })  

      app.listen(process.env.PORT , ()=>{
        console.log(` app is listening on port : ${process.env.PORT}`);
      })
    } catch (error) {
        console.error("ERROR :" , error)
        throw error
    }
}) () */

    // profesional
