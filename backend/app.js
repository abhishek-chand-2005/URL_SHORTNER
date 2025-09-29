import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import shortUrl from './src/routes/short_url.route.js'
import auth_routes from './src/routes/auth.route.js'
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from "cors";
import { attachUser } from "./src/utils/attachUser.js";
import cookieParser from 'cookie-parser'



dotenv.config("./.env")
const app = express();

// middleware
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(attachUser)

// routes
app.use('/api/auth', auth_routes)
app.use('/api/create', shortUrl)
app.get('/:id', redirectFromShortUrl)


app.use(errorHandler)

// listen on port 3000
app.listen(3000, ()=>{
    connectDB()
    console.log("Server is running on port 3000")
})