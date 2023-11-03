const tweetRepository = require('../repository/tweet-repository');
const commentRepository = require('../repository/comment-repository');

class commentServices {
    constructor() {
        this.TweetRepository = new tweetRepository();
        this.CommentRepository = new commentRepository();
    }
    async createcomment(modelId,modelType,userId,content){
      if(modelType=='tweet'){
         var commentabe=await this.TweetRepository.find(modelId);
         
      }else if(modelType=='comment'){

      }else{
        throw new Error('unkonown model type')
      }
     const comment =await this.CommentRepository.create({
        content:content,
        userId:userId,
        onModel:modelType,
        commentable:modelId
     });
     console.log(commentabe);
     await commentabe.comments.push(comment);
     await commentabe.save();
     return comment;
    }
}
module.exports=commentServices