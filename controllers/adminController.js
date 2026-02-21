const User = require("../models/Users")
const AuditLog = require("../models/AuditLog")

exports.getAllUsers =async(req,res)=>{
try{
const users = await User.find().select("-password")
res.json(users)
}catch(error){
    res.status(500).json({message:error.message})
}
}
exports.promoteUser = async(req,res)=>{
    try{
        console.log(req.params.id,"Hello")
        const user  = await User.findByIdAndUpdate(req.params.id,{role:"admin"},{new: true})
        await AuditLog.create({
            action:"PROMOTE_USER",performedBy:req.user._id,targetUser:user._id
        })

res.json({message: "User promoted to admin",user})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}
exports.blockedUser = async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,{isBlocked:true},{new:true})
        await AuditLog.create({
            action:"BLOCK_USER",performedBy: req.user._id,targetUser:user._id
        })
        res.json({message: "User blocked",user})

    }catch(error){
        res.status(500).json({message: error.message})
    }
}
exports.getLogs = async(req,res)=>{
    try{
        const logs = await AuditLog.find()
        .populate("performedBy","name email")
        .populate("targetUser","name email")
        res.json(logs)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}