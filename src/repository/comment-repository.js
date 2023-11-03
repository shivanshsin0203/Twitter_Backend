const comment = require('../models/comment')

class commentRepository{
    async create(data){
        try{
          const Tweet=await comment.create(data);
          return Tweet 
        }catch(error){
            console.log(error);
        }
    }
    async get(id){
        try{
        const Tweet=await comment.findById(id);
        return Tweet;
        }catch(error){
           console.log(error)
        }
    }
    async destroy(id){
        try{
      const Tweet=await comment.findByIdAndDelete(id)
      return Tweet
        }catch(error){
            console.log(error)
        }
    }
}
module.exports=commentRepository;