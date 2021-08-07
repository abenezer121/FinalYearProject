const mongoose = require('mongoose')
const news = require('./../../model/news')
const newsCath = require('./../../model/newscategory')

const { update, findByIdAndUpdate } = require('../../model/experts')
const newscategory = require('./../../model/newscategory')

/*
  DbModel.StoreProduct.findOneAndUpdate({ _id: productId }, { availability: !value.availability }, function (err, product) {
                                if (err) { console.log("little error") } else { res.status(200).send("success") }


                        });
*/

module.exports = {
    async getAll(page){
       return await news.find({ _id : id })
    

    },
    async getOne(id){
        return  await news.find({ _id : id })
      
    },
    async searchHeader(name){
        return  await news.find({ name : name});   
    },
    async add(cathName , newsHeader , date ,  newsContent , newsPhotoLocation  ){
        const newsCategory = new newscategory({
            categoryName : cathName,
        })
        
        const saveNewsCategory = await newsCategory.save()
        
        const newNews = await news({
            newsHeader : newsHeader,
            date : date ,
            newsContent : newsContent,
            newsPhotoLocation : newsPhotoLocation,
            newsCategory : newsCategory[0]._id
        })

        return await newNews.save()

    },
    async updateNews(id){

        const update = findByIdAndUpdate({_id : id})

    },
    async delete(id){
        return news.findOneAndDelete({ _id : id})
    }
}

