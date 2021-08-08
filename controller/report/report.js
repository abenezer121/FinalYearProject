
const mongoose = require('mongoose')
const { getOne, add } = require('../role/role')
const { update } = require('./../../model/report')
const reportModel = require('./../../model/report')
const userController = require('./../user/userManager')
const locustController = require('./../locust/locust')



module.exports = {
    async get(page){ return await reportModel.find({}).limit(20).skip(20 * page) },
    
    async getOne(id){ return await reportModel.find({_id : id}).limit(20) },
    
    async add(reporterId , ReportLatitude ,  ReportLongitude , ReportPhotoLocation  , LocustColor , LocustImageLocation , LocustPhase ,  locustTypeModelId){

  

        const getUser = await userController.getGeneralUser(reporterId)[0]

        const locustPhase = await locustController.getOneLocustPhase(LocustPhase)[0]

        const locustType = await locustController.getOnelocustTypeModel(locustTypeModelId)[0]

        const locust = await locustController.addLocust(LocustColor , LocustImageLocation , LocustPhase ,  locustTypeModelId )
        
        const _report = new reportModel({
            reporterId :  getUser,
            ReportLatitude : ReportLatitude ,
            ReportLongitude : ReportLongitude,
            ReportPhotoLocation : ReportPhotoLocation ,     
            DetectedLocust : locust
          
        })

        return await _report.save()


    },

    async delete(id){ return await reportModel.findOneAndDelete({ _id : id}) },

}