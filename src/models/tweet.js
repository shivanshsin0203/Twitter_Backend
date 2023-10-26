const mongoose=require('mongoose')

const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[250,'Tweet cannot exceed 250 words']
    },
    hashtags:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'hashtag'
    }]
},{timestamps:true});

const tweet =mongoose.model('tweet',tweetSchema);

module.exports=tweet;