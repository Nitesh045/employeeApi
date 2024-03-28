// import  express  from "express";
const express= require('express');
const router = express.Router();

const  userController =require( '../controller/userController')

router.post('/signup',userController.singup_post);
router.post('/signIn',userController.login_post);

module.exports=router;