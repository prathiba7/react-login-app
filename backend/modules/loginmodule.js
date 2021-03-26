const mongoose =require('mongoose')
const router = require('../routes/routes')


const loginTemplate=new mongoose.Schema({
        username:{
            type : String,
            required:true
        },
       
        password:{
            type:String,
            required:true
        },
       

});



module.exports=mongoose.model("mytable",loginTemplate)