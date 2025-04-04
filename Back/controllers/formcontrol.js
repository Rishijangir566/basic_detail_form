import nodemailer from "nodemailer"
import { formDetails } from "../models/modelschema.js";
// import jwt from "jsonwebtoken"

// const jwtKey = process.env.JWT_SECRET

export async function postData(req, res) {
  console.log("hello");

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
    //         const token = jwt.sign({ id: savedData.id, email: savedData.email }, jwtKey, { expiresIn: "1h" });
    //   console.log(token);

    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      secure: false,
      auth: {
        user:"apikey", // this is always "apikey"
        pass: process.env.SENDGRID_API_KEY, // store your key in .env
      },
    });

    const mailOptions = {
      from: process.env.FROM_EMAIL, // verified sender email
      to: email, // recipient's email from form
      subject: "Welcome to Our Platform!",
      text: `Hello ${name},\n\nThanks for registering with us!`,
      html: `<h3>Hello ${name},</h3><p>Thanks for registering with us!</p>`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent to:", email);

    res.status(201).send({
      message: "Data Saved Successfully",
      // token,
      data: savedData,
      existingData: formdata,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({
      message: "Error saving data",
      error: error.message,
    });
  }
}
console.log("SENDGRID_API_KEY:", process.env.SENDGRID_API_KEY);
console.log("FROM_EMAIL:", process.env.FROM_EMAIL);

export async function getData(req, res) {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res
        .status(401)
        .send({ message: "email and password are require  " });
    }
    const user = await formDetails.find({ email, password });

    if (!user) {
      return res.status(401).send({ message: "Invalid user and password" });
    }
    return res.status(200).send("Login successfully" + user);
  } catch (error) {
    console.log("Error is " + error);
  }
}

export async function logOut() {}
