const User = require("../models/Users");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


exports.register = async(req,res)=>{
    try{
    const {name, email, password} = req.body
    const userExits = await User.findOne({email});
    if(userExits){
        return res.status(400).json({message:"User already exists"})
    }

    const hashPassword = await bcrypt.hash(password,10);
    console.log(hashPassword)
    const user = await User.create({
        name,email,password:hashPassword
    })
    res.status(201).json({message:"User register successfully",user})
}
catch(error){
    res.status(500).json({message: error.message})
}
}
exports.login = async(req,res)=>{
    try{
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({message:"Invalid credentials"})
        }
        if(user.isBlocked){
            return res.status(403).json({message:"User is blocked"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            res.status(400).json({message:"Password invalid"})
        }
    const token = await jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:"24h"})
    res.json({message:"Login successfully",token})

    }catch(error){
        res.status(500).json({message: error.message})
    }
}