const mongoose = require ('mongoose');


const Schema = mongoose.Schema;



const generalUserSchema = new Schema({
    id     : Schema.Types.ObjectId,
    woreda : String  ,
    region : { type : Schema.Types.ObjectId , ref : 'REGION'} ,
    report :  [{ type : Schema.Types.ObjectId , ref : 'REPORT'}]
})

module.exports = mongoose.model('GENERALUSER' , generalUserSchema)
