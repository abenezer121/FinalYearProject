const express = require('express')

const newsRouter =express.Router()
const auth = require('./../../auth/auth')

const newsController = require('./../../controller/news/newsManager')


newsRouter.get('/getAll/:page', async(req,res)=>{
    try {

        const { page } = req.params;
        const news = await newsController.getAll(page)
        res.status(200).send(news)
        
    } catch (error) {
        res.status(400).send({ error : error.message})
    }
 })
 
 
 newsRouter.get('/getOne/:id', async( req , res , next)=>{
     try {
         
        const { id } = req.params;
        console.log(id)
        const resp = await newsController.getOne(id);
        res.status(200).send(resp)
        
     } catch (error) {
        res.status(400).send({ error : error.message})
     }
 })
 
 
 newsRouter.post('/searchHeader', async( req , res , next)=>{
     try {
        
     } catch (error) {
        res.status(400).send({ error : error.message})
     }
 })
 
 newsRouter.post('/add' , async ( req , res , next ) => {
     try {
        
        const { cathName , newsHeader , date ,  newsContent , newsPhotoLocation } = req.body;
      
        const add = await newsController.add(cathName , newsHeader , date ,  newsContent , newsPhotoLocation )
        res.status(200).send(add)
        
     } catch (error) {
        res.status(400).send({ error : error.message})
     }
 })
 
 newsRouter.put('/update' , async( req , res  , next ) => {
     try {

        const {  id , cathName , newsHeader , date ,  newsContent , newsPhotoLocation } = req.body;
        const update = await newsController.updateNews(  id , cathName , newsHeader , date ,  newsContent , newsPhotoLocation)
        res.status(200).send(update)
        
     } catch (error) {
        res.status(400).send({ error : error.message})
     }
 })
 
 newsRouter.delete('/delete' , async( req , res  , next ) => {
     try {
        
        const { id } = req.body;
        const response  = await newsController.delete(id)
        res.status(200).send(response)
     } catch (error) {
        res.status(400).send({ error : error.message})
     }
 })
 

module.exports=newsRouter