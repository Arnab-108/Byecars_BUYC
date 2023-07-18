const express = require("express")
const cors = require("cors")
const { connection } = require("./db")
const { authRouter } = require("./Routes/user.router")
const app = express()

app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("HomePage!")
})
app.use("/user",authRouter)

app.listen(8080,async()=>{
    try {
        await connection
        console.log("Connected to DB!")
        console.log("Server is running at 8080")
    } catch (error) {
        console.log(error)
        console.log("Something went wrong!")
    }
    
})