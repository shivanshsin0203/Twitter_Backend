const mongoose=require('mongoose');
const path = require('path');
const dotenv=require('dotenv')
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
const mongoUrl=process.env.mongoUrl
const coonect=async()=>{
    await mongoose.connect(mongoUrl)
}
module.exports=coonect;