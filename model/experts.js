const mongoose = require ('mongoose');
const Schema = mongoose.Schema;



const expertSchema = new Schema({
    id     : Schema.Types.ObjectId,
    LastLogin : String ,
    region : { type : Schema.Types.ObjectId , ref : 'REGION'} ,
    woreda : String
})

module.exports = mongoose.model('EXPERTS' , expertSchema)
