const mongoose = require ('mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema({
    id     : Schema.Types.ObjectId,
    UserName : String ,
    PhoneNumber : String ,
    FirstName : String ,
    password : String ,
    LastName : String  ,
    Gender : String ,
    centeralAdmin : { type : Schema.Types.ObjectId , ref : 'CENTRALADMIN'} ,
    experts : { type : Schema.Types.ObjectId , ref : 'EXPERTS'} ,
    generalUsers : { type : Schema.Types.ObjectId , ref : 'GENERALUSER'} ,
    Role : { type : Schema.Types.ObjectId , ref : 'ROLES'} ,
    LastLogin : String ,


})

module.exports = mongoose.model('Users' , userSchema)
