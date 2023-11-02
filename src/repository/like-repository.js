const likes = require('../models/like');


class likeRepository{
    async create(data){
        try{
          const Tweet=await likes.create(data);
          return Tweet 
        }catch(error){
            console.log(error);
        }
    }
    async get(id){
        try{
        const Tweet=await likes.findById(id);
        return Tweet;
        }catch(error){
           console.log(error)
        }
    }
    async destroy(id){
        try{
      const Tweet=await likes.findByIdAndDelete(id)
      return Tweet
        }catch(error){
            console.log(error)
        }
    }
    async findByUserandLikeable(data){
      try{
             const like=likes.findOne(data);
             return like;
      }catch(error){
            console.log(error)
        }
    }
}
module.exports=likeRepository;