const mongoose = require('mongoose')
const { findOneAndDelete } = require('./../../model/role')
const role = require('./../../model/role')


const roleSchema  = new Schema({
    id     : Schema.Types.ObjectId,
    RoleName : String,
   
})

module.exports = {
    async getOne(id){ return await role.find({ _id : id}) },

    async get(){ return await role.find({}) },
    
    async add(RoleName){

        const _role = new role({
            RoleName : RoleName
        })
        return await _role.save()
    },
    async delete(id){ return await findOneAndDelete({_id : id}) },
    
    async update( id , name){
      
            var objForUpdate = {};
            if (name) objForUpdate.RoleName = name;
            objForUpdate = { $set: objForUpdate }
            return role.update({_id:id}, objForUpdate )
    
    }
}