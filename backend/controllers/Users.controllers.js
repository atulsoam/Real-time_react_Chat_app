import User from "../modules/user_module.js"
export const GetUserForSideBar = async (req,res)=>{
    try {
        const loggedInUserId =  req.user._id
        const Alluser = await User.find({_id :{$ne:loggedInUserId}}).select("-password")
        return res.status(200).json(Alluser)
    } catch (error) {
        console.log(error)
        return res.status(400).json({messsage:error})
    }
}