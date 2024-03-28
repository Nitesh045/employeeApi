const express= require('express');

const tablerouter=express.Router();
const tablePostControler=require('../controller/tableController')

tablerouter.post('/submitdata',tablePostControler.table_post);


tablerouter.put('/formupdate/:id',tablePostControler.table_put);


tablerouter.get('/home',tablePostControler.table_get);

tablerouter.get('/formdatabyId/:id',tablePostControler.table_getId)
tablerouter.delete('/deldata/:id',tablePostControler.table_del);


module.exports=tablerouter;