const { database } = require("../db/connection")

const employees=database.collection("employees")
const insert=async(req,res)=>{
    const details=req.body;
    // console.log(details)
    const data= await employees.insertMany(details)
    res.send(data)
}
const salary_gt_30k=async(req,res)=>{
    const data = await employees.find({"salary":{$gt:"30000"}}).toArray()
    res.send(data)
}
const exp_gt_2=async(req,res)=>{
    const data=await employees.find({ "overallExp":{$gt:"2"}}).toArray()
    res.send(data)
}
const yearGrad_gt_2015_exp_gt_2=async(req,res)=>{
    const data=await employees.find({"yearGrad":{$gt:"2015"}},{ "overallExp":{$gt:"2"}}).toArray()
    res.send(data)
}
const updateSalary=async(req,res)=>{
    const data=await employees.find({ "salary":{$gt:"70000"}},{$set:{"salary":"65000"}}).toArray()
    res.send(data)
}

module.exports={insert,salary_gt_30k,exp_gt_2,yearGrad_gt_2015_exp_gt_2,updateSalary}