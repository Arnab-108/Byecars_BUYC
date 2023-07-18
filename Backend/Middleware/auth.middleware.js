const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1]
    if(token){
        try {
            const decoded = jwt.verify(token,"cars")
            if(decoded){
                console.log(decoded)
                req.body.dealerId = decoded.dealerId
                req.body.dealer = decoded.dealer
                next()
            }
            else{
                res.send({msg:"Please Login First!"})
            }
        } catch (error) {
            res.send({msg:"Please Login First!"})
        }
    }
    else{
        res.send({msg:"Please Login First!"})
    }
}

module.exports = {auth}