const mongoose = require("mongoose")

const marketplaceSchema = mongoose.Schema({
    company:{type:String},
    car:{type:String},
    prev_byer:{type:String},
    image:{type:String},
    color:{type:String},
    meilage:{type:Number},
    max_speed:{type:Number},
    major_scratches:{type:Number},
    kms_ran:{type:Number},
    org_paint:{type:String},
    accidents:{type:Number},
    rgst_place:{type:String},
    price:{type:Number},
    id:{type:String}
},{
    versionKey:false
})

const marketplaceModel = mongoose.model("market",marketplaceSchema)

module.exports = {marketplaceModel}