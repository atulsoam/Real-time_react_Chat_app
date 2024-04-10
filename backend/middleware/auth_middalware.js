import jwt from "jsonwebtoken"
import User from "../modules/user_module.js";

const AuthMiddleWare = async (req,res,next)=>{
    const token = req.cookies.Jwt;
    if (!token){
        return res.status(400).json({message:"There is no token in cookies "})
    }
    const decode = jwt.verify(token,process.env.JWTTOKEN)
    if (!decode){
        return res.status(400).json({message:"User is not valid"})
    }

    const user = await User.findById(decode.userID).select("-password")

    if (!user){
        return res.status(400).json({message:"User not found"})
    }
    req.user = user
    next()
};

export default AuthMiddleWare;