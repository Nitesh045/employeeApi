const express = require('express');
const router = express.Router();
// import userDetails from '../Schema/user'
const userDetails = require('../Schema/user');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'qwertyuioplkjhgfdsazxcvbnm', {
        expiresIn: maxAge
    });
};


module.exports.singup_post = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    let existingUser;
    try {
        existingUser = await userDetails.findOne({ email: email });
    } catch (error) {
        console.log(error);
    }
    if (existingUser) {
        return res
            .status(400).json({ message: "teacher alredy " })
    }

    const hasingPassword = bcrypt.hashSync(password, 10);
    try {

        const iteams = new userDetails({
            firstName,
            lastName,
            email,
            password: hasingPassword,
        });

        const userfinalData = await iteams.save();
        const token = createToken(userDetails._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        console.log('data addees')
    } catch (e) {
        console.log(e)
    }
    return res.status(201).json({ message: "data added" })
};



module.exports.login_post = async (req, res, next) => {
    const { email, password } = req.body;
    let existingUser;
    try {
        existingUser = await userDetails.findOne({ email: email })
    } catch (error) {
        console.log(error)
    }

    if (!existingUser) {
        return res.status(400).json({ message: "user not found singup" })
    }

    const CorrectPassword = bcrypt.compareSync(password, existingUser.password);

    if (!CorrectPassword) {
        return res.status(400).json({ message: "password is incorrect" });
    }

    const token = createToken(existingUser._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    return res.status(200).json({ message: "loged in", iteams: existingUser, token });
}