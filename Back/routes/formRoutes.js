import express from "express"
import { postData ,getData ,logOut} from "../controllers/formcontrol.js"

export const formRouter = express.Router()

formRouter.post("/login",getData)
formRouter.post("/add",postData)

formRouter.post("/logout",logOut)