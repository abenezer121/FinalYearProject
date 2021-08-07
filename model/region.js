const mongoose = require ('mongoose');
const Schema = mongoose.Schema;



const regionSchema = new Schema({
    id     : Schema.Types.ObjectId,
    regionName : String ,

})

module.exports = mongoose.model('REGION' , regionSchema)
