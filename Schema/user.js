const  mongoose = require( "mongoose");



const userData= new mongoose.Schema(({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        
    },
    password:{
        type:String,
        require:true
    }
}));



module.exports=mongoose.model('userDetails',userData)
