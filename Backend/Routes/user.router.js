const express = require("express")
const {authModel} = require("../Model/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const authRouter = express.Router()

authRouter.post("/signup",async(req,res)=>{
    const {email,name,password,age} = req.body
    const user1 = await authModel.findOne({email:email})
    if(user1){
        res.status(200).send({msg:"User already exists , Please Login !"})
    }
    else{
        try {
            bcrypt.hash(password , 5 , async(err,hash)=>{
                const data = authModel({name,email,password:hash,age})
                await data.save()
                res.status(200).send({"msg":"A New User is Added!" , user:req.body})
            })
        } catch (error) {
            res.status(400).send({err:error})
        }
    }
})

authRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body
    try {
        const user = await authModel.findOne({email})
        if(user){
            bcrypt.compare(password,user.password,(err,result)=>{
                if(result){
                    let token = jwt.sign({dealerId:user._id , dealer:user.name},"cars",{
                        expiresIn:"7d"
                    })
                    res.status(200).send({msg:"Logged In" , token:token , user:user})
                }
                else{
                    res.status(400).send({err:"Provide the correct password"})
                }
            })
        }
        else{
            res.status(400).send({msg:"Please provide an email Id and Password!"})
        }
    } catch (error) {
        res.status(400).send({err:error})
    }
})
module.exports={authRouter}