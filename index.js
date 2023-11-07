const express=require("express")
const route = require("./routes/emp_routes")
const {connect} = require("./db/connection")
const app=express()
app.use(express.json())
app.get("/",(req,res)=>{
res.send({
  1:"/insert",
  2:"/salary_gt_30k",
  3:"/exp_gt_2",
  4:"/yearGrad_gt_2015_exp_gt_2",
  5:"/updateSalary"
})
})
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