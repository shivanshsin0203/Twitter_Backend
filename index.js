const express=require('express')
const {port}=require('./src/config/serverconfig')
const app=express();
const connect=require('./src/config/database');
const commnenService=require('./src/services/comment-service')
app.listen(port,async ()=>{
      console.log("Server Started at "+port);
      await connect();
      console.log("Connected to databse");
       this.likeservice=new commnenService();
     await this.likeservice.createcomment('653a300f4080e8a331a34c24','tweet','6543c389c9b2bfecc3900522','First Comment');
     
})
