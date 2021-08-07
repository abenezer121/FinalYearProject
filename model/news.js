const mongoose = require ('mongoose');
const Schema = mongoose.Schema;



const newsSchema = new Schema({
    id     : Schema.Types.ObjectId,
    newsHeader : String , 
    date : String ,
    newsContent : String ,
    newsPhotoLocation : String,
    newsCategory :  { type : Schema.Types.ObjectId , ref : 'NEWSCATEGORY'}


})

module.exports = mongoose.model('NEWS' , newsSchema)
