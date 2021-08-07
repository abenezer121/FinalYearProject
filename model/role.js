const mongoose = require ('mongoose');
const Schema = mongoose.Schema;




const roleSchema  = new Schema({
    id     : Schema.Types.ObjectId,
    RoleName : String,
   
})

module.exports = mongoose.model('ROLES' , roleSchema)
