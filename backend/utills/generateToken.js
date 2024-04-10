import jwt from "jsonwebtoken"

const generateTokenSetCokkie = (userID, res) =>{
    const token = jwt.sign({userID},process.env.JWTTOKEN,{
        expiresIn:"1d"
    })

    res.cookie("Jwt",token,{
        maxAge: 15 *24 * 60 * 60 *1000,
        httpOnly:true,
        sameSite:"strict"
    })
};

export default generateTokenSetCokkie;