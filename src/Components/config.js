const mongoose = require("mongoose");
const connecct = mongoose.connect("mongodb://localhost:27017/Login-tu");

connect.then(() =>{
    console.log("Database connected ");
})
.catch(()=>{
    console.log("Database cannot be connected");
});

const LoginSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;