import mongoose from "mongoose";

// Schema
const formSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    fName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true }
});

export const formDetails = mongoose.model("formDetails", formSchema);
