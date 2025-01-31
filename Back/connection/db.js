import mongoose from "mongoose";
import "dotenv/config"

 export async function connectToDb(){
    await mongoose.connect("mongodb://127.0.0.1:27017/basicform");
    // await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.ektln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
}