const mongoose = require('mongoose');

const commentSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required:true
    },
    onModel:{
        type:String,
        required:true,
        enum:['tweet','comment']
    },
    commentable:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onModel'
    }
});
const comment=mongoose.model('comment',commentSchema);

module.exports=comment;
