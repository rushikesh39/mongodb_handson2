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
async function startServer() {
    try {
      const db = await dbconnect();
      app.use("/",userRoutes)
      app.listen(5000, () => console.log('Server is running on port 5000'));
    } catch (error) {
      console.error('Error starting the server:', error);
    }
  }
  
  startServer(); 