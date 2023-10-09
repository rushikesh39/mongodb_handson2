const express=require('express')
const app=express()
const client=require('./db/connection')
const userRoutes=require("./routes/routes")
app.use(express.json())
async function dbconnect(){
    try{
        await client.connect()
        console.log("Database connected")
        
    }
    catch(e){
        console.log(e)
    }
}
dbconnect()
app.use("/",userRoutes)
app.listen(5000,()=>console.log("server is runnig 5000"))