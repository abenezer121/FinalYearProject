const express = require('express')

const newsRouter =express.Router()
const auth = require('./../../auth/auth')

const newsController = require('./../../controller/news/newsManager')


newsRouter.get('/getAll:page', async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
 })
 
 
 newsRouter.get('/getOne:id', async( req , res , next)=>{
     try {
        
     } catch (error) {
         
     }
 })
 
 
 newsRouter.post('/searchHeader', async( req , res , next)=>{
     try {
        
     } catch (error) {
         
     }
 })
 
 newsRouter.post('/add' , async ( req , res , next ) => {
     try {
        
     } catch (error) {
         
     }
 })
 
 newsRouter.put('/update' , async( req , res  , next ) => {
     try {
        
     } catch (error) {
         
     }
 })
 
 newsRouter.delete('/:id' , async( req , res  , next ) => {
     try {
        
     } catch (error) {
         
     }
 })
 

module.exports=newsRouter