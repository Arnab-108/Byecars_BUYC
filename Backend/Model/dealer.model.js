const mongoose = require("mongoose")

const dealerSchema = mongoose.Schema({
    dealer:{type:String , required:true},
    dealerId:{type:String , required:true},
    company:{type:String},
    car:{type:String},
    prev_byer:{type:String},
    color:{type:String},
    meilage:{type:Number},
    max_speed:{type:Number},
    major_scratches:{type:Number},
    kms_ran:{type:Number},
    org_paint:{type:String},
    accidents:{type:Number},
    rgst_place:{type:String},
    price:{type:Number}
},{
    versionKey:false
})

const dealerModel = mongoose.model("dealer",dealerSchema)

module.exports = {dealerModel}