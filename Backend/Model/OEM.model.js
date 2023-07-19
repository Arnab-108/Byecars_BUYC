const mongoose = require("mongoose")

const oemSchema = mongoose.Schema({
    company:String,
    model:String,
    year:Number,
    color:String,
    power:Number,
    max_speed:Number,
    price:Number,
    mileage:Number,
    image:String
},{
    versionKey:false
})

const oemModel = mongoose.model("oem",oemSchema)

module.exports = {oemModel}