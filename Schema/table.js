const mongoose= require('mongoose');
const dataSchema= new mongoose.Schema({
      name:{
        type:String,
        require:true,
      },
      img:{
        type:String,
        require:true
      },
      gender:{
        type:String,
       require:true
      },
      jobDetails:{
        type:Array,
        require:true
      },
      salary:{
         type:String,
         require:true

      },
      
        joinD:{
          type:String,
          require:true
        },
        joinM:{
          type:String,
          require:true
        },
        joinY:{
          type:String,
          require:true
        },

    
      notes:{
        type:String,
        require:true
      }
   
   
});
module.exports= mongoose.model('formData',dataSchema);