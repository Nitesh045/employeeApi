const mongoose= require('mongoose');

const dbUri= process.env.MONGODBURL;
console.log(process.env.MONGODBURL);
mongoose.connect(dbUri)
.then(()=>console.log('database conenct'))
.catch((e)=>console.log(e))


