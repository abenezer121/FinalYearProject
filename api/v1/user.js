const router = require('express').Router()
const createUserController = require('./../../controller/user/userManager')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

router.post('/createExpert' , async ( req , res , next) => {
    try
    {
        const { UserName , PhoneNumber ,  FirstName , password , LastName , Gender , regionName , woreda} = req.body;
        const user = await createUserController.registerExpert(UserName , PhoneNumber ,  FirstName , password , LastName , Gender , regionName , woreda);
        res.status(200).send(user)
    }catch(err){
        res.status(400).send({ message : err.message})
    }
})


router.post('/createGeneralUser' , async ( req , res , next) => {
    try{
        const { UserName , PhoneNumber ,  FirstName , password , LastName , Gender , regionName , woreda} = req.body;
        const user = await createUserController.registerCenteralAdmin(UserName , PhoneNumber ,  FirstName , password , LastName , Gender , regionName , woreda);
        res.status(200).send(user)
    }
    catch(err){
        res.status(400).send({ message : err.message})
    }
})


router.post('/loginUser' , async ( req , res , next)=> {
    try {
        const { username , password} = req.body;
        const user = await login(username , password);

        const token = jwt.sign({
            _id: user[0]._id,
             name: user[0].UserName
        }, process.env.TokenPassword, {
            expiresIn: '1d'
        })
        res.status(200).send( token)
    } catch (error) {
        res.status(400).send({ message : err.message})
    }
})


router.get('/getGeneralUsers/:page' , async ( req , res , next)=>{
    try {

        const {page} = req.params;
        const data = await createUserController.getAllGeneralUsers(page);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({error : error.message})
    }
})


router.get('/getAllExperts/:page' , async ( req , res , next)=>{
    try {

        const {page} = req.params;
        const data = await createUserController.getAllExperts(page);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({error : error.message})
    }
})



router.get('/getAllUsers/:page' , async ( req , res , next)=>{
    try {

        const {page} = req.params;
        const data = await createUserController.getAllUsers(page);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({error : error.message})
    }
})



router.get('/getExpert:id' , async ( req , res , next) => {
    try {
        const {id} = req.params;
        const data = await createUserController.getExpert(id);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({error : error.message})
    }
})


router.get('/getGeneralUser:id' , async ( req , res , next) => {
    try {
        const {id} = req.params;
        const data = await createUserController.getGeneralUser(id);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({error : error.message})
    }
})


router.get('/getAllUser:id' , async ( req , res , next) => {
    try {
        const {id} = req.params;
        const data = await createUserController.getAllUser(id);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({error : error.message})
    }
})

router.delete('/deleteUser' , async ( req , res , next) => {
    try {
     
        const {id} = req.body;
    
        const data = await createUserController.deleteUser(id);
        res.status(200).send(data)

    } catch (error) {
        res.status(400).send({error : error.message})
    }
})

router.post( '/updateUser' , async ( req , res , next)=>{
    try {

        const {  id , UserName , PhoneNumber , FirstName , password , LastName , LastLogin} = req.body;

        const update = await createUserController.updateUser(id , UserName , PhoneNumber , FirstName , password , LastName , LastLogin)
        
        res.status(200).send(update)
        
    } catch (error) {
        res.status(400).send({ message : error.message})
    }
})

router.post('/updateExpert' , async ( req , res , next)=>{
    try {
         
        const { id ,  woreda , regionName } = req.body;

        if(regionName) regionName = await createUserController.createRegion(regionName)
        
        const update = await createUserController.updateExpert(id , woreda , regionName);
        
        res.status(200).send(update)
               
    } catch (error) {

        res.status(400).send({ message : error.message})

    }
})

router.post('/updateGeneralUser' , async ( req , res, next)=>{
    try {

        const { id , woreda , regionName } = req.body;

        if(regionName) regionName = await createUserController.createRegion(regionName)
        
        const update = await createUserController.updateGeneralUser( id , woreda , regionName)
        
        res.status(200).send(update)

    } catch (error) {

        res.status(400).send({ message : error.message})

    }
})





module.exports = router;