

const mongoose = require ('mongoose');
const Schema = mongoose.Schema;



const reportSchema = new Schema({
    id     : Schema.Types.ObjectId,
    reporterId :  { type : Schema.Types.ObjectId , ref : 'GENERALUSER'},
    ReportLatitude : String ,
    ReportLongitude : String,
    ReportPhotoLocation : String ,
    AreaWeatherDirection : String ,
    VegitationAmount : String, 
    DetectedLocustType : { type : Schema.Types.ObjectId , ref : 'Locust' }
})

module.exports = mongoose.model('REPORT' , reportSchema)
