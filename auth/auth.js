const jwt = require('jsonwebtoken')








module.exports = async function (req, res, next) {
        try{

                const token = req.body.token || req.params.token
                const verified = jwt.verify(token, process.env.TokenPassword);
                req.fromtokenid = verified._id
                req.user = verified

                next()
        }
        catch(error){
                res.status(400).send({ error : error.message})
        }


}



        // try {



        // const token = req.params.token
        // //req.cookies['token'] || req.body.token || req.params.token;

        // const botToken = req.body.telegramId;
        // const botUserAgent = "BOT_AFRIGEBETA_1.0_5541128774855964XVB" // Only treat requests from this IP as bot requests. Look for telegramId and work from that.

        // const incomingUserAgent = req.get('user-agent');

        // // console.dir({
        // //         token, botIP: botUserAgent, incomingIP: incomingUserAgent, botToken
        // // })

        // // if it is from the bot
        // //console.dir({ incomingIP, botIP, body: req.body })
        // if (incomingUserAgent == botUserAgent) {

        //         const { telegramId } = req.body
        //         if (!telegramId) throw new Error("telegram id is required")
        //         else {
        //                 const customer = await Customer.findOne({ telegramid: telegramId })

        //                 //console.dir(customer)
        //                 // Throwing the error was crashing the whole server!
        //                 if (!customer)  throw new Error("user doesn't exist")

        //                 req.user = customer._doc
        //                 next()
        //         }
        // } else {

        //         if (!token) {


        //                  throw new Error("access denied")
        //         }
        //         try {
        //                 const verified = jwt.verify(token, process.env.TokenPassword);
        //                 // Attach the whole user object instead of just name and id
        //                 const customer = await Customer.findOne({ _id: verified._id })
        //                 if (!customer) throw new Error("user doesn't exist")

        //                 // console.dir(customer)
        //                 req.user = customer._doc
        //                 next()
        //         } catch (err) {
        //                 // redirect

        //                 if (err.name == 'TokenExpiredError') throw new Error("token expired")
        //                 else throw new Error('Invalid Token')
        //         }
        // }
        // } catch (error) {
        //         console.log(error)
        //         res.status(403).send("Login First")
        // }
