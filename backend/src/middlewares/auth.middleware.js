import { verifyToken } from "../utils/helper";
import { findById } from "../dao/user.doa";


export const authMiddleware = async (req, res, next)=>{
    const token = req.cookie.accessToken;
    if(!token)return res.status(401).json({message:"Unauthorized"})

        try{
            const decoded = verifyToken(token)
            const user = await findById(decoded.id)
            if(!user) return res.status(401).json({message:"Unauthorized"})
            req.user = user
            next()
        }catch(err){
            return res.status(401).json({message:"Unauthorized"})
        }
}