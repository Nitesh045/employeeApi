const express = require('express');
const router = express.Router();
const tableSchema = require('../Schema/table')


module.exports.table_post = async (req, res) => {
    try {
        await tableSchema.create({
            name: req.body.name,
            img: req.body.img,
            gender: req.body.gender,
            salary: req.body.salary,
            jobDetails: req.body.jobDetails,
            joinD: req.body.joinD,
            joinM: req.body.joinM,
            joinY: req.body.joinY,

            notes: req.body.notes


        }).then((data) => {
            res.status(201).json({
                status: true,
                message: "data add succesfully",


            })
            console.log(data);

        }).catch((e) => {
            res.status(400).json({
                status: false,
                message: "bad request"
            });
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "internal error"
        })
    }
}

module.exports.table_put = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)

        const { name, img, gender, salary, joinD, joinM, joinY ,jobDetails} = req.body;
        const formUpdatedata = await tableSchema.findByIdAndUpdate(id, { name, img, gender, jobDetails, joinD, joinM, joinY, salary }, { new: true })
        res.json(formUpdatedata);
        console.log(formUpdatedata)
    } catch (err) {
        res.status(404).json({ message: err.message });
        console.log(err)
    }
}
module.exports.table_get = async (req, res) => {
    try {

        const formgetdata = await tableSchema.find()
        res.json(formgetdata);
        console.log(formgetdata);
    } catch (err) {
        res.status(404).json({ message: err.message });
        console.log(err)
    }
}


module.exports.table_del = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedata = await tableSchema.findByIdAndDelete(id)
            .then((data) => {
                res.status(201).send({
                    status: true,
                    message: "data deleted  succesfully",


                });
                console.log(data);
            }).catch((e) => {
                res.status(400).send({
                    status: false,
                    message: "bad request"
                });
            })
    } catch (error) {
        res.status(500).send({
            status: false,
            message: "internal error"
        })
    }
};
module.exports.table_getId = async (req, res) => {
    try {
        const id = req.params.id;
        const databyid = await tableSchema.findById(id)
        .then((data) => {
            res.status(201).send({
                status: true,
                data:data,
                message: "data get  succesfully",


            });
            console.log(data);
        }).catch((e) => {
            res.status(400).send({
                status: false,
                message: "bad request"
            });
        })
    } catch (error) {
        res.status(500).send({
            status: false,
            message: "internal error"
        })
    }

}