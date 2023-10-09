const {MongoClient}=require('mongodb')
const uri='mongodb+srv://test:aqWW9h8C6XnEYE4h@cluster0.lkhf4ct.mongodb.net/?retryWrites=true&w=majority'

const client=new MongoClient(uri,{useNewUrlParser:true})
module.exports=client