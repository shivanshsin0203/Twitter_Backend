const express=require('express')
const {port}=require('./src/config/serverconfig')
const app=express();
const tweetServices=require('./src/services/tweet-service')
const connect=require('./src/config/database');
const tweet = require('./src/models/tweet');
app.listen(port,async ()=>{
      console.log("Server Started at "+port);
      await connect();
      console.log("Connected to databse");
      let tweetservice=new tweetServices();
      const tweet=tweetservice.create({
            content:'#Hello and started new #life'
      })
})
