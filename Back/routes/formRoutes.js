import express from "express"
import { postData ,getData } from "../controllers/formcontrol.js"

export const formRouter = express.Router()

formRouter.get("/get",getData)

formRouter.post("/add",postData)