const { query } = require('express')
const client=require('../db/connection')
const db=client.db('Human_Resource')
const collection=db.collection('employee')

// function addnewUser(req,res){
//     try{
//         collection.insertOne({name:"node",class:"mongodb"})
//         res.status(200).send("data inserted")
//     }
//    catch(e){
//     res.send("error")
//    }
      

// }
function insert(req,res){
    try{
       const result= collection.insertMany([
            {
               
                "firstName": "John",
                "lastName": "Doe",
                "salary": "25000",
                "department": "HR",
                "lastCompany": "X",
                "lastSalary": "10000",
                "overallExp": "2",
                "contactInfo": "1234567890",
                "yearGrad": "2016",
                "gradStream": "CSE"
            },
            {
               
                "firstName": "Rohan",
                "lastName": "Jame",
                "salary": "30000",
                "department": "Technical",
                "lastCompany": "Y",
                "lastSalary": "15000",
                "overallExp": "1",
                "contactInfo": "1234567860",
                "yearGrad": "2015",
                "gradStream": "CSE"
            },
            {
                
                "firstName": "Jame",
                "lastName": "Doe",
                "salary": "35000",
                "department": "Accounts",
                "lastCompany": "Z",
                "lastSalary": "20000",
                "overallExp": "1",
                "contactInfo": "123567890",
                "yearGrad": "2019",
                "gradStream": "ECE"
            },
            {
                
                "firstName": "Sao",
                "lastName": "Avika",
                "salary": "30000",
                "department": "Sales",
                "lastCompany": "Y",
                "lastSalary": "15000",
                "overallExp": "2",
                "contactInfo": "1234567860",
                "yearGrad": "2015",
                "gradStream": "CSE"
            },
            {
                
                "firstName": "Jame",
                "lastName": "roh",
                "salary": "35000",
                "department": "Accounts",
                "lastCompany": "Z",
                "lastSalary": "15000",
                "overallExp": "2",
                "contactInfo": "123567890",
                "yearGrad": "2019",
                "gradStream": "EEE"
            },
            {
                
                "firstName": "Rohan",
                "lastName": "Jame",
                "salary": "30000",
                "department": "Technical",
                "lastCompany": "Y",
                "lastSalary": "15000",
                "overallExp": "1",
                "contactInfo": "1234567860",
                "yearGrad": "2015",
                "gradStream": "CSE"
            },
            {
                
                "firstName": "Jame",
                "lastName": "Doe",
                "salary": "35000",
                "department": "Accounts",
                "lastCompany": "Z",
                "lastSalary": "20000",
                "overallExp": "1",
                "contactInfo": "123567890",
                "yearGrad": "2019",
                "gradStream": "ECE"
            },
            {
                
                "firstName": "Sao",
                "lastName": "Avika",
                "salary": "30000",
                "department": "Sales",
                "lastCompany": "Y",
                "lastSalary": "15000",
                "overallExp": "2",
                "contactInfo": "1234567860",
                "yearGrad": "2015",
                "gradStream": "CSE"
            },
            {
                
                "firstName": "Jame",
                "lastName": "Doe",
                "salary": "35000",
                "department": "Accounts",
                "lastCompany": "Z",
                "lastSalary": "15000",
                "overallExp": "2",
                "contactInfo": "123567890",
                "yearGrad": "2019",
                "gradStream": "EEE"
            },
            {
               
                "firstName": "Rohan",
                "lastName": "Jame",
                "salary": "30000",
                "department": "Technical",
                "lastCompany": "Y",
                "lastSalary": "15000",
                "overallExp": "1",
                "contactInfo": "1234567860",
                "yearGrad": "2015",
                "gradStream": "CSE"
            },
            {
                
                "firstName": "Jame",
                "lastName": "Doe",
                "salary": "35000",
                "department": "Accounts",
                "lastCompany": "Z",
                "lastSalary": "20000",
                "overallExp": "1",
                "contactInfo": "123567890",
                "yearGrad": "2019",
                "gradStream": "ECE"
            },
            {
                
                "firstName": "Sao",
                "lastName": "Avika",
                "salary": "30000",
                "department": "Sales",
                "lastCompany": "Y",
                "lastSalary": "15000",
                "overallExp": "2",
                "contactInfo": "1234567860",
                "yearGrad": "2015",
                "gradStream": "CSE"
            },
            {
                
                "firstName": "Jame",
                "lastName": "Doe",
                "salary": "35000",
                "department": "Accounts",
                "lastCompany": "Z",
                "lastSalary": "15000",
                "overallExp": "2",
                "contactInfo": "123567890",
                "yearGrad": "2019",
                "gradStream": "EEE"
            }
        ])
        res.status(200).send(result)
    }
   catch(e){
    res.send("error")
   }
      

}
async function findUserwithsalarygreaterthan30000(req,res){
    try{
        // const result=await collection.findOne({name:"node",class:'mongodb'})
        const result=await collection.find({salary:{$gt:'30000'}}).toArray()
        console.log(result)
        res.send({"user salary greater than 30000":result})
    } 
    catch(e){
        res.send("error")
    }
}
async function findUserwithEXPgreaterthan2(req,res){
    try{
        // const result=await collection.findOne({name:"node",class:'mongodb'})
        const result=await collection.find({overallExp:{$gt:'2'}}).toArray()
        console.log(result)
        res.send({"user exp greater than 2":result})
    } 
    catch(e){
        res.send("error")
    }
}
async function findUserwith_yearGrad_after2015_and_exp_greaterthan1(req,res){
    try{
        const result=await collection.find({ "yearGrad": { $gt: "2015" }},{"overallExp":{$gt:"1"}}).toArray()
        console.log(result)
        res.send({"findUserwith_yearGrad_after2015_and_exp_greaterthan1":result})
    } 
    catch(e){
        res.send("error")
    }
}
async function update(req,res){
    try{
        const result=await collection.updateMany({ "salary": { $gte: "70000" } },{ $set: { "salary": "65000" } })
        console.log(result)
        res.send({user:result})
    } 
    catch(e){
        res.send("error")
    }
}
// async function deleteUser(req,res){
//     try{
//         // const result=await collection.findOne({name:"node",class:'mongodb'})
//         const result=await collection.deleteOne({name:"node"})
//         console.log(result)
//         res.send({user:result})
//     } 
//     catch(e){
//         res.send("error")
//     }
// }

module.exports={insert,findUserwithsalarygreaterthan30000,findUserwithEXPgreaterthan2,findUserwith_yearGrad_after2015_and_exp_greaterthan1,update}