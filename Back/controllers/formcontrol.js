
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

export  async function getData(req, res){
    try {
      const data = await formDetails.find()
      res.send(data)
    }
    catch(error){
      console.log("Error is "+ error);
      
    }

}
