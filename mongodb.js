const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/bloggramdb")
.then(()=>{
    console.log("Connected to Database");
})
.catch(()=>{
    console.log("Failed to connect");
})

const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("Collection1",LogInSchema)
module.exports = collection;
