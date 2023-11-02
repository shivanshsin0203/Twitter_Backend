const tweet = require('../models/tweet')

class tweetRepository{
    async create(data){
        try{
          const Tweet=await tweet.create(data);
          return Tweet 
        }catch(error){
            console.log(error);
        }
    }
    async get(id){
        try{
        const Tweet=await tweet.findById(id).populate({path:'likes'});
        return Tweet;
        }catch(error){
           console.log(error)
        }
    }
    async destroy(id){
        try{
      const Tweet=await tweet.findByIdAndDelete(id)
      return Tweet
        }catch(error){
            console.log(error)
        }
    }
}
module.exports=tweetRepository;