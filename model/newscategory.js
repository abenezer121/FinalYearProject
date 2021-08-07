const mongoose = require ('mongoose');
const Schema = mongoose.Schema;



const newsCategorySchema = new Schema({
    id     : Schema.Types.ObjectId,
    categoryName : String ,

})

module.exports = mongoose.model('NEWSCATEGORY' , newsCategorySchema)
