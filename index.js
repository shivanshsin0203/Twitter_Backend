const express=require('express')
const {port}=require('./src/config/serverconfig')
const app=express();
const connect=require('./src/config/database');
const user = require('./src/models/user');
const tweet = require('./src/models/tweet');
const likeService=require('./src/services/like-services')
app.listen(port,async ()=>{
      console.log("Server Started at "+port);
      await connect();
      console.log("Connected to databse");
      const getuser=await user.find({});
      const gettweet=await tweet.find({});
     this.likeservice=new likeService();
     await this.likeservice.toggelLike(gettweet[0].id,'tweet',getuser[0].id)
})
