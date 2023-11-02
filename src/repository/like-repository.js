const like = require('../models/like')

class likeRepository{
    async create(data){
        try{
          const Tweet=await like.create(data);
          return Tweet 
        }catch(error){
            console.log(error);
        }
    }
    async get(id){
        try{
        const Tweet=await like.findById(id);
        return Tweet;
        }catch(error){
           console.log(error)
        }
    }
    async destroy(id){
        try{
      const Tweet=await like.findByIdAndDelete(id)
      return Tweet
        }catch(error){
            console.log(error)
        }
    }
}
module.exports=likeRepository;