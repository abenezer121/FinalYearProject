const mongoose = require ('mongoose');
const Schema = mongoose.Schema;



const centeralAdminSchema = new Schema({
    id     : Schema.Types.ObjectId,
    isAdmin :{ type: Boolean , default: false }
})

module.exports = mongoose.model('CENTRALADMIN' , centeralAdminSchema)
