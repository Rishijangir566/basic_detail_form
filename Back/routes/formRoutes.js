import express from "express"
import { postData ,getData } from "../controllers/formcontrol.js"

export const formRouter = express.Router()

formRouter.post("/login",getData)

formRouter.post("/add",postData)