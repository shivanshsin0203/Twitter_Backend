const mongoose=require('mongoose')

const hastagSchema=new mongoose.Schema({
    title:{
        type:String,
        requireed:true
    },
    tweets:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"tweet"
    }]
},{timestamps:true})

const Hashtag=mongoose.model('hashtag',hastagSchema);

module.exports=Hashtag;