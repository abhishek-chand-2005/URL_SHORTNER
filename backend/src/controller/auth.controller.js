import wrapAsync from "../utils/tryCatchWrapper.js"
import { registerUser, loginUser } from "../services/auth.service.js"
import {cookieOptions} from "../config/config.js"


export const register = wrapAsync( async (req, res) =>{
    const {name, email, password } = req.body
    const {token,user} = await registerUser(name, email, password)
    req.user = user
    res.cookie("accessToken", token, cookieOptions)
    res.status(200).json({message : "loggin Succss"})
})

export const login = wrapAsync( async (req, res) =>{
    const {email, password} = req.body;
    const {token,user} = await loginUser(email, password)
    req.user = user
    res.cookie("accessToken", token, cookieOptions)
    res.status(200).json({message:"login success"})
})

export const get_current_user = wrapAsync( async (req, res) => {
    res.status(200).json({user:req.user})
})