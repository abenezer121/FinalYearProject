const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const LocustTypeSchema = new Schema({
    id     : Schema.Types.ObjectId,
    name : String ,
})

module.exports = mongoose.model('LocustType' , LocustTypeSchema)
