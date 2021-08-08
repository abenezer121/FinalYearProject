const mongoose = require('mongoose')
const news = require('./../../model/news')
const newsCath = require('./../../model/newscategory')

const { update, findByIdAndUpdate } = require('../../model/experts')
const newscategory = require('./../../model/newscategory')


async function addCategoy(cathName){
  
    const newsCategory = new newscategory({
        categoryName : cathName,
    })
    return  await newsCategory.save()
}

async function  updateCategory( id , cathname){
    var objForUpdate = {};

    let resp = await await news.find({ _id : id })

    if (cathname) objForUpdate.categoryName = cathname;
    
    objForUpdate = { $set: objForUpdate }
    
    return await  newsCath.findByIdAndUpdate({_id : resp[0].newsCategory} , objForUpdate)
}

module.exports = {
    async getAll(page){
       return await news.find({}).skip(20 * page).populate("newsCategory")
    },
    async getOne(id){
       
        return  await news.find({ _id : id }).populate("newsCategory")
      
    },
    async searchHeader(name){
        return  await news.find({ name : name});   
    },

  
    async add(cathName , newsHeader , date ,  newsContent , newsPhotoLocation  ){

        const newsCategory = await addCategoy(cathName)

     
        const newNews = await news({
            newsHeader : newsHeader,
            date : date ,
            newsContent : newsContent,
            newsPhotoLocation : newsPhotoLocation,
            newsCategory : newsCategory
        })

        return await newNews.save()
       
    },
   
    
    async updateNews(id , cathName , newsHeader , date ,  newsContent , newsPhotoLocation){

        
        var objForUpdate = {};
       
        if (cathName)  await updateCategory(id , cathName)
        if (newsHeader) objForUpdate.newsHeader = newsHeader;
        if (date) objForUpdate.date = date;
        if (newsContent)   objForUpdate.newsContent = newsContent
        if (newsPhotoLocation)  objForUpdate.newsPhotoLocation = newsPhotoLocation
        objForUpdate = { $set: objForUpdate }
        
        return await  news.findByIdAndUpdate({_id : id} , objForUpdate)

    },

    async delete(id){
        return news.findOneAndDelete({ _id : id})
    }
}

