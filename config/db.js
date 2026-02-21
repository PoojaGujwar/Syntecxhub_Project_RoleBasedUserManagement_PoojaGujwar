const mongoose = require("mongoose")
require("dotenv").config()
const mongoURL = process.env.MONGODB

const initializeDatabase =async()=>{
    await mongoose.connect(mongoURL).then((mess)=>console.log("Connected Database")).catch((error)=>console.log("DB connection error",error))
}

module.exports = {initializeDatabase}