import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import shortUrl from './src/routes/short_url.route.js'
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from "cors";



dotenv.config("./.env")
const app = express();

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes
app.use('/api/create', shortUrl)
app.get('/:id', redirectFromShortUrl)


app.use(errorHandler)

// listen on port 3000
app.listen(3000, ()=>{
    connectDB()
    console.log("Server is running on port 3000")
})