const tweet = require('../models/tweet')
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
        const Tweet=await tweet.findById(id);
        return Tweet;
        }catch(error){
           console.log(error)
        }
    }
}
module.exports=tweetRepository;