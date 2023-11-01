const tweetRepository = require('../repository/tweet-repository');
const hashtagRepository = require('../repository/hashtag-repository');

class tweetServices {
    constructor() {
        this.TweetRepository = new tweetRepository();
        this.HashtagRepository = new hashtagRepository();
    }

    async create(data) {
        try {
            const content = data.content;
            let tags = content.match(/#[a-zA-Z0-9_]+/g);
            tags = tags.map((tag) => tag.substring(1).toLowerCase());
            console.log(tags);
            const Tweet = await this.TweetRepository.create(data);
            let alreadyPresentTags = await this.HashtagRepository.findByName(tags);
            console.log(alreadyPresentTags);

            if (Array.isArray(alreadyPresentTags) && alreadyPresentTags.length > 0) {
                let titleOfPresentTags = alreadyPresentTags.map(tag => tag.title);
                let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
                newTags = newTags.map(tag => ({ title: tag, tweets: [Tweet.id] }));
                await this.HashtagRepository.bulkCreate(newTags);

                for (const tag of alreadyPresentTags) {
                    if (!tag.tweets) {
                        tag.tweets = [];
                    }
                    tag.tweets.push(Tweet.id);
                    await tag.save(); 
                }
            } else {
                let newTags = tags.map(tag => ({ title: tag, tweets: [Tweet.id] }));
                await this.HashtagRepository.bulkCreate(newTags);
            }
            return Tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = tweetServices;
