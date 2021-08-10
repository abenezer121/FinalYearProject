const mongoose = require('mongoose')
const experts = require('./../../model/experts')
const generalUser = require('./../../model/generalUsers')
const user = require('./../../model/user')
const role = require('./../../model/role')
const region = require('./../../model/region')
const generalUsers = require('./../../model/generalUsers')


async  function searchRole(RoleName){
    return  await role.find({ RoleName : RoleName}  )
 }


 async function createRegion(regionName){
     const newRegion = new region({ regionName : regionName , })
     return  await newRegion.save( )
 }

 async function createExperts( saveRegion , woreda){
     const newExpert = new experts({
         region : saveRegion,
         woreda : woreda,
     })

     return  await newExpert.save()
 }

 async function createGeneralUser(saveRegion , woreda){
     const generalUsers = new generalUser({
         region : saveRegion,
         woreda : woreda,
     })
     
     return await generalUsers.save()
 }

module.exports = {


    

  
    async registerExpert(UserName , PhoneNumber ,  FirstName , password , LastName , Gender , regionName , woreda ){

        

                    const userExist = await user.find( { PhoneNumber : PhoneNumber , UserName : UserName})
                    if(userExist.length > 0) throw new Error("User Already Exists")
        
            
                    const searchRole = await searchRole("expert")
                    let roleId = searchRole[0]._id

                    const saveRegion = await createRegion(regionName)
                   
                    
                    const saveExpert = await createExperts(saveRegion , woreda )
                   
                    


                    // create new Expert
                    const newUser = new user({
                        UserName : UserName,
                        PhoneNumber : PhoneNumber ,
                        FirstName : FirstName ,
                        password : password ,
                       
                        LastName : LastName  ,
                        Gender : Gender,
                        experts : newExpert ,
                        Role : searchRole[0],
                        LastLogin : Date.now()  ,
                    })
                    
                    return await newUser.save()
            
        },

        async registerCenteralAdmin(){
 
        },

        async registerGeneralUser(UserName , PhoneNumber ,  FirstName , password , LastName , Gender , regionName , woreda ){
        
         

                const userExist = await user.find( { PhoneNumber : PhoneNumber , UserName : UserName})
                if(userExist.length > 0) throw new Error("User Already Exists")
    
        
                const searchRole = await searchRole("generaluser")
                let roleId = searchRole[0]._id

                //create new region 
                const saveRegion = await createRegion(regionName)
                   
                // create new expert 
                const saveGeneralUser = createGeneralUser(saveRegion ,woreda)
                


                // create new Expert
                const newUser = new user({
                    UserName : UserName,
                    PhoneNumber : PhoneNumber ,
                    FirstName : FirstName ,
                    password : password ,
                    LastName : LastName  ,
                    Gender : Gender,
                    woreda : woreda,
                    generalUsers : saveGeneralUser ,
                    Role : searchRole[0],
                    LastLogin : Date.now()  ,
                })
                
                return await newUser.save()
        
        

        },
        
        async getAllExperts(page){
            return await user.find({"experts":{$ne:null}}).limit(20).skip(20 * page).
            populate({ 
                path: "experts",
                populate : {
                    path : "region"
                }
            }) 
        },

        async getAllGeneralUsers(page){
            return await user.find({"generalUsers":{$ne:null}}).limit(20).skip(20 * page).
            populate({ 
                path: "generalUsers",
                populate : {
                    path : "region"
                }
            }) 
        },

        async getAllUsers(page){
           return  await user.find({}).limit(20).skip(20 * page)
        },

        async getExpert(id){
            return await user.find({"_id": id}).limit(20).skip(20 * page). populate({ 
                path: "experts",
                populate : {
                    path : "region"
                }
            }) 
        },
        async getGeneralUser(id){
            return await user.find({ "_id" : IDBCursor}).limit(20).skip(20 * page).
            populate({ 
                path: "generalUsers",
                populate : {
                    path : "region"
                }
            }) 
        },
        async getUser(id){ return  await user.find({"_id" : id}).limit(20).skip(20 * page) },

        async deleteUser(id){ return await user.deleteOne({"_id" : id}) },
        
        async updateUser(id , UserName , PhoneNumber , FirstName , password , LastName , LastLogin){
        
            var objForUpdate = {};
           
            if (UserName) objForUpdate.UserName = UserName;
            if (PhoneNumber) objForUpdate.PhoneNumber = PhoneNumber;
            if (FirstName) objForUpdate.FirstName = FirstName;
            if (password)   objForUpdate.password = password
            if (LastName)  objForUpdate.LastName = LastName
            if (LastLogin) objForUpdate.LastLogin = LastLogin
            
            objForUpdate = { $set: objForUpdate }

            return user.update({_id:id}, objForUpdate )

        },
        async updateExpert(id ,  woreda , region){

            
            var objForUpdate = {};
            if (woreda) objForUpdate.woreda = woreda;
            if (region) objForUpdate.region = region;
            
            objForUpdate = { $set: objForUpdate }

            return experts.update({_id:id}, objForUpdate )
        },
        async updateGeneralUser(id , woreda , region){

            var objForUpdate = {};
            if (woreda) objForUpdate.woreda = woreda;
            if (region) objForUpdate.region = region;
            objForUpdate = { $set: objForUpdate }
            return generalUsers.update({_id:id}, objForUpdate )
        }
        
}

