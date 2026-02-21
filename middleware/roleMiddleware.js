const roleMiddleware =(role)=>{
    return (req,res,next)=>{
        console.log(req.user, "hello",req)
        if(req.user.role !== role){
            return res.status(403).json({message:"access denied"})
        }
        next()
    }
}
module.exports = roleMiddleware