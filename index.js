const express=require("express")
const route = require("./routes/emp_routes")
const {connect} = require("./db/connection")
const app=express()
app.use(express.json())
app.use("/api",route)
app.listen(5000,async()=>{
  try{
    await connect()
    console.log("server is running on port 5000")
  }
  catch(err){
    console("server error",err)
  }
})