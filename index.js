const {initializeDatabase} = require("./config/db")
const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT||4000
const authRoute = require("./routes/auth.routes")
const adminRoute = require("./routes/admin.routes")

initializeDatabase()
app.use(cors())
app.use(express.json())

app.use("/api/auth",authRoute)
app.use("/api/admin",adminRoute)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})