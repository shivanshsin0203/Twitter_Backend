const  Hashtag  = require('../models/hashtag')

class hashtagRepository{
    async create(data){
        try{
          const tag=await Hashtag.create(data);
          return tag; 
        }catch(error){
            console.log(error);
        }
    }
    async get(id){
        try{
        const tag=await Hashtag.findById(id);
        return tag;
        }catch(error){
           console.log(error)
        }
    }
    async bulkCreate(data){
        try{
         const tag=await Hashtag.insertMany(data);
         return tag;
        }catch(error){
            console.log(error)
        }
    }
    async destroy(id){
        try{
      const tag=await Hashtag.findByIdAndDelete(id)
      return tag;
        }catch(error){
            console.log(error)
        }
    }
    async findByName(name){
        try{
            const tags=await Hashtag.find({
                title:name
            }).select('title -_id');
            return tags;
        }catch(error){
            console.log(error)
        }
    }
}
module.exports=hashtagRepository;