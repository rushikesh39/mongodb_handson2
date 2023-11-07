const {MongoClient}=require("mongodb")
// const url="mongodb://127.0.0.1:27017"
const url="mongodb+srv://test:aqWW9h8C6XnEYE4h@cluster0.lkhf4ct.mongodb.net/?retryWrites=true&w=majority"

const mongoserver=new MongoClient(url)

const connect=async()=>{
    try{
        await mongoserver.connect()
        console.log("database connected successful")
    }
    catch(err){
        console.log("mongo db error",err)
    }
}
const database= mongoserver.db("Human_resource")
module.exports={connect,database}