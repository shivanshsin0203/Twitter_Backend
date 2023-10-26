const mongoose=require('mongoose')

const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    useEmail:{
        type:String
    }
},{timestamps:true});

const tweet =mongoose.model('tweet',tweetSchema);

module.exports=tweet