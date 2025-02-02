// import { formDetails } from "../models/modelschema.js";
// import mongoose from "mongoose";

// // export async function postData(req, res) {
// //     const formdata = await formDetails.find();
// //     res.send(formdata)
// //     console.log(formdata);
// // }

// export async function postData(req, res) {
//     const { id, name,fName ,email,password,phone,address } = req.body;
//     const newData = new formDetails({
//         id, 
//         name,
//         fName ,
//         email,
//         password,
//         phone,
//         address
//     })
//     await newData.save();
//     res.status(201).send({ messege: "Data Saved" });

// }


import {formDetails} from "../models/modelschema.js"
export async function postData(req, res) {
    try {
        const { id, name, fName, email, password, phone, address } = req.body;

        const newData = new formDetails({
            id,
            name,
            fName,
            email,
            password,
            phone,
            address
        });

        const savedData = await newData.save();
        res.status(201).json({ 
            
            message: "Data Saved Successfully", 
            data: savedData.toObject()
        });

    } catch (error) {
        res.status(500).json({ message: "Error saving data", error: error.message });
    }
}
