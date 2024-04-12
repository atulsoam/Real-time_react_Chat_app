import express from "express";
import User from "../modules/user_module.js";
import bcrypt from "bcrypt"
import generateTokenSetCokkie from "../utills/generateToken.js";

export const login = async (req, res) => {
    try {
        const { username, password } = req.body
        const userExist = await User.findOne({ username: username })
        const Ispasswordmatch = await bcrypt.compare(password, userExist?.password || "")
        if (!userExist || !Ispasswordmatch) {
            return res.status(400).json({ error: "Invalid Password or Username" })
        }
        generateTokenSetCokkie(userExist._id, res)
        return res.status(201).json(userExist)


    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error })
    }
}
export const logout = (req, res) => {
    try {
        res.cookie("Jwt","",{
            maxAge:0
        })
        return res.status(200).json({Message:"user Logged Out succesfully"})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ Error: "500 Internal server error" })
    }
}
export const singup = async (req, res) => {

    try {
        const { fullname, username, password, confirmPassword, gender } = req.body

        if (password != confirmPassword) {
            return res.status(400).json({ error: "Password didn't match!" })
        }

        const userExist = await User.findOne({ username })
        if (userExist) {
            return res.status(400).json({ Error: "user is already Registered!!" })
        }

        const BoyProfilePicApi = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const GirlProfilePicApi = `https://avatar.iran.liara.run/public/girl?username=${username}`
        const salt = await bcrypt.genSalt(10)
        const HasPassword = await bcrypt.hash(password, salt)
        const createUser = new User({
            fullname: fullname,
            username: username,
            password: HasPassword,
            gender: gender,
            profilePic: gender === "male" ? BoyProfilePicApi : GirlProfilePicApi
        })
        if (createUser) {
            generateTokenSetCokkie(createUser._id, res)
            await createUser.save()
            return res.status(201).json(createUser)
        } else {
            return res.status(500).json({ Error: "500 Internal server error" })

        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ Error: "500 Internal server error" })
    }
}