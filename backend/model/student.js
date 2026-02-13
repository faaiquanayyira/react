const mongoose = require("mongoose")

var schema=mongoose.Schema({
    Name:String,
    Age:Number,
    Department:String,
    Mark:Number
})

var studentModel=mongoose.model("stduent",schema)
module.exports=studentModel