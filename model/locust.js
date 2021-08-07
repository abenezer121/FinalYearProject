const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const locustPhase = require('./locustphase')
const locustType = require('./locusttype')




const LocustSchema = new Schema({
    id     : Schema.Types.ObjectId,
    LocustColor : String,
    LocustImageLocation : String ,
    LocustDescription : String ,
    LocustTypeId: { type: Schema.Types.ObjectId, ref: 'LocustType' }, 
    LocustPhaseId: { type: Schema.Types.ObjectId, ref: 'LocustPhase' }, 
     

})

module.exports = mongoose.model('Locust' , LocustSchema)
