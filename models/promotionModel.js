const mongoose = require('mongoose')
const { Schema } = mongoose;

const promotionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    label:{
        type:String,
        required:true,
        default:""
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    description:{
        type:String,
        required:true
    },
    featured:{
        type:Boolean,
        required:true,
        deafult:true
    }
})


module.exports = mongoose.model('Promotion', promotionSchema)