const express = require("express")
const {dealerModel} = require("../Model/dealer.model")

const {auth} = require("../Middleware/auth.middleware")

const dealerRouter = express.Router()

dealerRouter.use(auth)

dealerRouter.get("/",async(req,res)=>{
    const {color , meilage , price , order} = req.query
    const query={}
    if(color){
        query.color = {$in:color}
    }
    if(price){
        query.price = {$in:price}
    }
    if(meilage){
        query.meilage = {$in:meilage}
    }
    let sortObj = {}
    if(order==="asc"){
        sortObj.price = 1
    }
    else if(order==="desc"){
        sortObj.price = -1
    }
    try {
        const data = await dealerModel.find({dealerId:req.body.dealerId}).find(query).sort(sortObj)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({err:error})
    }
})

dealerRouter.get('/:id',async(req,res)=>{
    const {id}=req.params;
    try {
        const data=await dealerModel.findOne({_id:id});
        res.send(data);
    } catch (error) {
        res.send({"msg":error.message});
    }
})


dealerRouter.post("/add",async(req,res)=>{
    try {
        const data = new dealerModel(req.body)
        await data.save()
        res.status(200).send({msg:"New Deal Added!" , data:req.body})
    } catch (error) {
        res.status(400).send({err:error})
    }
})

dealerRouter.patch("/:id",async(req,res)=>{
    const {id} = req.params
    const data = await dealerModel.findOne({_id:id})
    try {
        if(req.body.dealerId!==data.dealerId){
            res.status(400).send({msg:"Something went wrong!"})
        }
        else{
            await dealerModel.findByIdAndUpdate({_id:id},req.body)
            res.status(200).send({msg:`${id} is updated`})
        }   
    } catch (error) {
        res.status(400).send({err:error})
    }
})

dealerRouter.delete("/:id",async(req,res)=>{
    const {id} = req.params
    const data = await dealerModel.findOne({_id:id})
    try {
        if(req.body.dealerId!==data.dealerId){
            res.status(400).send({msg:"Something went wrong!"})
        }
        else{
            await dealerModel.findByIdAndDelete({_id:id})
            res.status(200).send({msg:`${id} is removed`})
        }   
    } catch (error) {
        res.status(400).send({err:error})
    }
})

module.exports = {dealerRouter}