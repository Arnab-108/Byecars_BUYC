const  express = require("express")
const  {oemModel} = require("../Model/OEM.model")

const oemRouter = express.Router()


oemRouter.get("/",async(req,res)=>{
    const {q} = req.query
    try {
        if(q){
            const data = await oemModel.find({model:{$regex:q , $options:'i'}})
            res.status(200).send(data)
        }
        else{
            const data = await oemModel.find()
            res.status(200).send(data)
        }
    } catch (error) {
        res.status(400).send({err:error})
    }
})

oemRouter.get('/:id',async(req,res)=>{
    const {id}=req.params;
    try {
        const data=await oemModel.findOne({_id:id});
        res.send(data);
    } catch (error) {
        res.send({"msg":error.message});
    }
})

oemRouter.post("/add",async(req,res)=>{
    try {
        const data = new oemModel(req.body)
        await data.save()
        res.status(200).send({msg:"New Info Added!",Info:req.body})
    } catch (error) {
        res.status(400).send({err:error})
    }
})


module.exports = {oemRouter}