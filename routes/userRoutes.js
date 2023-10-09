const client=require('../db/connection')
const db=client.db('mydb')
const collection=db.collection('student')
function addnewUser(){
    collection.insertOne({name:"node",class:"mongodb"},(err,res)=>{
        if(err){
            console.log(err)
        }
        console.log("data",res)
        })

}
module.exports=addnewUser