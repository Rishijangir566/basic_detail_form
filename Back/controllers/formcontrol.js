
import { formDetails } from "../models/modelschema.js";

export async function postData(req, res) {
    try {

        const formdata = await formDetails.find();
        const { name, fName, email, password, phone, address } = req.body;
        const newData = new formDetails({
            name,
            fName,
            email,
            password,
            phone,
            address,
        });

        const savedData = await newData.save();
        res.status(201).json({
            message: "Data Saved Successfully",
            data: savedData,
            existingData: formdata,
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: "Error saving data",
            error: error.message,
        });
    }
}

export async function getData(req, res) {

    const { email, password } = req.body


    try {

        if (!email || !password) {
            return res.status(401).send({ message: "email and password are require  " })
        }
        const user = await formDetails.find({ email, password })

        if (!user) {
            return res.status(401).send({ message: "Invalid user and password" })
        }
        return res.status(200).send("Login successfully" + user)
    }
    catch (error) {
        console.log("Error is " + error);
    }

}
