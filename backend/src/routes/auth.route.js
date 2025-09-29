import express from "express"
import {register, login, get_current_user} from "../controller/auth.controller.js"
import {authMiddleware} from "../middlewares/auth.middleware.js"

const router = express.Router()


router.post("/register", register)
router.post("/login", login)
router.get("/me", authMiddleware ,get_current_user)


export default router