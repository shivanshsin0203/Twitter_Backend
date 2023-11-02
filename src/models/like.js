const mongoose=require('mongoose');

const likeSchema=new mongoose.Schema({
    onModel:{
        type:String,
        required:true,
        enum:['tweet','comment']
    },
    likeable:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onModel'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    }
},{timestamps:true});
const likes =mongoose.model('like',likeSchema);

module.exports=likes;