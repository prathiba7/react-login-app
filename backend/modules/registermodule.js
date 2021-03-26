const mongoose =require('mongoose')
const router = require('../routes/routes')


const registerTemplate=new mongoose.Schema({
        username:{
            type : String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            default:Date.now
        }

});



module.exports=mongoose.model("mytable",registerTemplate)