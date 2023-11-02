const likeRepository=require('../repository/like-repository')
const tweetRepository = require('../repository/tweet-repository');

class likeService{
    constructor(){
        this.Likerepository=new likeRepository();
        this.TweetRepository = new tweetRepository();

    }
    async toggelLike(modelId,modelType,userId){
        if(modelType=='tweet'){
            var likeable=await this.TweetRepository.get(modelId)
        }
        else if(modelType=='comment'){

        }
        else{

        }
        const exists=await this.Likerepository.findByUserandLikeable({
            user:userId,
            onModel:modelType,
            likeable:modelId
        });
        if(exists){
            likeable.likes.pull(exists.id);
            await likeable.save();
            await this.Likerepository.destroy(exists.id)
        }else{
            const newLike=await this.Likerepository.create({
                user:userId,
                onModel:modelType,
                likeable:modelId
            });
            likeable.likes.push(newLike)
            await likeable.save()
        }
    }
}
module.exports=likeService;