const express = require("express")
const {marketplaceModel} = require("../Model/marketplace.model")
const marketplaceRouter = express.Router()


marketplaceRouter.get("/",async(req,res)=>{
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
        const data = await marketplaceModel.find(query).sort(sortObj)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({err:error})
    }
})

marketplaceRouter.post("/add",async(req,res)=>{
    const {id} = req.body
    console.log(id)
    const car = await marketplaceModel.findOne({id})
    if(car){
        res.status(400).send({msg:"This car is already added! Please add a new car"})
    }
    else{
        try {
            const data = new marketplaceModel(req.body)
            await data.save()
            res.status(200).send({msg:"Added to the Marketplace!" , car:req.body})
        } catch (error) {
            res.status(400).send({err:error})
        }
    }
})


module.exports = {marketplaceRouter}