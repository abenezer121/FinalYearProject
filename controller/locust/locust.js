const mongoose = require('./../../model/locust')
const locustphase = require('./../../model/locustphase')
const locustmodel = require('./../../model/locust')
const locustTypeModel = require('./../../model/locusttype')
const locust = require('./../../model/locust')



async function _addLocustPhase(name , LocustPhaseDescription){
    const _locustPhase = new locustphase({
        name : name ,
        LocustPhaseDescription : LocustPhaseDescription
    })
    return await  _locustPhase.save()
}

async function  _addlocustTypeModel(name){
    const _locustTypeModel = new locustTypeModel({
        name : name 
    })
    return await _locustTypeModel.save()
}

async function searchlocustTypeModel(name){ return await locustTypeModel.find({ name : name }) }

async function searchLocustPhase(name ){  return await locustphase.find({ name : name})}

module.exports = {

    async addLocustPhase(name , LocustPhaseDescription){ return await _addLocustPhase(name , LocustPhaseDescription) },

    async getLocustPhase(page){ return locustphase.find({}).limit(20).skip(20 * page) },
    
    async getOneLocustPhase(id){ return locustphase.find({_id : id}) },
    
    async deleteLocustPhase(id){ return locustphase.findOneAndDelete({_id : id}) },
    
    async updateLocustPhase(id , name){
        var objForUpdate = {};
        if (name) objForUpdate.name = name;
        objForUpdate = { $set: objForUpdate }
        return locustphase.update({_id:id}, objForUpdate )
    },



    async addlocustTypeModel(name) { return await _addlocustTypeModel(name) },
   
    async getlocustTypeModel(page) { return locustTypeModel.find({}).limit(20).skip(20 * page) },
   
    async getOnelocustTypeModel(id) { return locustTypeModel.find({_id : id}) },
    
    async deletelocustTypeModel(id){ return locustTypeModel.findOneAndDelete({_id : id}) },
    
    async updatelocustTypeModel(id , name){

        var objForUpdate = {};
        if (name) objForUpdate.name = name;
        objForUpdate = { $set: objForUpdate }

        return locustTypeModel.update({_id:id}, objForUpdate )
    },



    async addLocust(LocustColor , LocustImageLocation , LocustPhase ,  locustTypeModelId ){

     
        const _locust = new locustphase({
            LocustColor : LocustColor, 
            LocustImageLocation : LocustImageLocation , 
            LocustPhase : LocustPhase, 
            locustTypeModelId : locustTypeModelId , 
        })
        return await  _locust.save()

    },
    
    async getLocust(page){ return locustmodel.find({}).limit(20).skip(20 * page) },
    
    async getOneLocust(id) { return locustmodel.find({_id : id}) },
    
    async deleteLocust(id) { return locustmodel.findOneAndDelete({_id : id}) },
    
    async updateLocust(LocustColor , LocustImageLocation){
        var objForUpdate = {};
        if (LocustColor) objForUpdate.LocustColor = LocustColor;
        if (LocustImageLocation) objForUpdate.LocustImageLocation = LocustImageLocation;
        
        objForUpdate = { $set: objForUpdate }

        return locust.update({_id:id}, objForUpdate )
    },
    
}