const tweetRepository=require('../repository/tweet-repository')

class tweetServices{
    constructor(){
        this.TweetRepository=new tweetRepository()
    }
    async create(data){
        try{
            const content =data.content;
            const tags=content.match(/#[a-zA-Z0-9_]+/g);
            tags=tags.map((tag)=>tag.substring(1));
            const Tweet=await this.TweetRepository.create(data);
            return Tweet;
        }catch(error){
            console.log("error in service in tweet")
        }
    }
}