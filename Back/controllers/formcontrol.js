import { formDetails } from "../models/modelschema.js";
import mongoose from "mongoose";

export async function getData(req, res) {
    const formdata = await formDetails.find();
    res.send(formdata)
}

export async function postData(req, res) {
    const { id, name,fName ,email,password,phone,address } = req.body;
    const newData = new formDetails({
        id, 
        name,
        fName ,
        email,
        password,
        phone,
        address
    })
    await newData.save();
    res.status(201).send({ messege: "Data Saved" });

}