import express from "express"
import { postData } from "../controllers/formcontrol.js"

export const formRouter = express.Router()

// formRouter.get("/get",getData)

formRouter.post("/add",postData)