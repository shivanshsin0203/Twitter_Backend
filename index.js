const express=require('express')
const {port}=require('./src/config/serverconfig')
const app=express();
const connect=require('./src/config/database')
app.listen(port,async ()=>{
      console.log("Server Started at "+port);
      await connect();
      console.log("Connected to databse")
})
