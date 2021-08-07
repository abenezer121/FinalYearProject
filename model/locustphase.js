const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const LocustPhaseSchema = new Schema({
    id     : Schema.Types.ObjectId,
    name : String ,
    LocustPhaseDescription : Sting ,
})
//OrderedTo: { type: Schema.Types.ObjectId, ref: 'Store' }, 
module.exports = mongoose.model('LocustPhase' , LocustPhaseSchema)
