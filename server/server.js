const express=require("express")
const dotenv=require("dotenv")
const ConnectDatabase=require("./db/config")
const app=express()
dotenv.config()

const PORT = process.env.PORT || 5000;

app.listen(PORT,async()=>{
    await ConnectDatabase()
    console.log(`Server is running on port  ${PORT}`)
})
