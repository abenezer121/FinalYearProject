const router = require('express')
const locustController = require('./../../controller/locust')

const locustRouter = express.Router()



locustRouter.post ('addLocustPhase ' , async ( req , res , next)=> {
    try {
        res.status(200).send(resp)
    } catch (error) {
        res.status(400).send({ error : error.message})
    }
})
locustRouter.get ('getLocustPhase/:page ' , async ( req , res , next)=> {
    try {
        res.status(200).send(resp)
    } catch (error) {
        res.status(400).send({ error : error.message})
    }
})
locustRouter.get ('getOneLocustPhase/:id ' , async ( req , res , next)=> {
    try {
        res.status(200).send(resp)
    } catch (error) {
        res.status(400).send({ error : error.message})
    }
})
locustRouter.delete ('deleteLocustPhase ' , async ( req , res , next)=> {
    try {
        res.status(200).send(resp)
    } catch (error) {
        res.status(400).send({ error : error.message})
    }
})
locustRouter.put (' updateLocustPhase ' , async ( req , res , next)=> {
    try {
        res.status(200).send(resp)
    } catch (error) {
        res.status(400).send({ error : error.message})
    }
})


locustRouter.post ('addlocustTypeModel ' , async ( req , res , next)=> {
    try {
        res.status(200).send(resp)
    } catch (error) {
        res.status(400).send({ error : error.message})
    }
})
locustRouter.get ('getlocustTypeModel/:page ' , async ( req , res , next)=> {
    try {
        res.status(200).send(resp)
    } catch (error) {
        res.status(400).send({ error : error.message})
    }
})
   
locustRouter.get ('getOnelocustTypeModel/:id ' , async ( req , res , next)=> {
    try {
        res.status(200).send(resp)
    } catch (error) {
        res.status(400).send({ error : error.message})
    }
})
locustRouter.delete ('deletelocustTypeModel ' , async ( req , res , next)=> {
    try {
        res.status(200).send(resp)
    } catch (error) {
        res.status(400).send({ error : error.message})
    }
})
locustRouter.put ('updatelocustTypeModel ,  ' , async ( req , res , next)=> {
    try {
        res.status(200).send(resp)
    } catch (error) {
        res.status(400).send({ error : error.message})
    }
})

      



locustRouter.post ('addLocust(LocustColor  ' , async ( req , res , next)=> {
    try {
        res.status(200).send(resp)
    } catch (error) {
        res.status(400).send({ error : error.message})
    }
})
    
locustRouter.get ('getLocust/:page ' , async ( req , res , next)=> {
    try {
        res.status(200).send(resp)
    } catch (error) {
        res.status(400).send({ error : error.message})
    }
})

locustRouter.get ('getOneLocust/:id  ' , async ( req , res , next)=> {
    try {
        const { id , page} = req.params;
        const resp = await locustController.getOneLocust(id)
        res.status(200).send(resp)
    } catch (error) {
        res.status(400).send({ error : error.message})
    }
})
    
locustRouter.delete ('deleteLocust' , async ( req , res , next)=> {
    try {

        res.status(200).send(resp)
    } catch (error) {
        res.status(400).send({ error : error.message})
    }
}) ,
    
locustRouter.put ('updateLocust' , async ( req , res , next)=> {
    try {
      
        res.status(200).send(resp)
    } catch (error) {
        res.status(400).send({ error : error.message})
    }
})   
   


module.exports = router