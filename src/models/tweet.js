const mongoose=require('mongoose')

const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[250,'Tweet cannot exceed 250 words']
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
         ref:'like'
    }]
},{timestamps:true});

const tweet =mongoose.model('tweet',tweetSchema);

module.exports=tweet;