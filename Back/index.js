// import express from "express";
// import "dotenv/config"
// import cors from "cors";
// import { connectToDb } from "./connection/db.js";
// import { formRouter } from "./routes/formRoutes.js";


// const app =express()
// const port =process.env.PORT

// app.use(cors({origin:"http://localhost:5173"}))

// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

// await connectToDb()

// app.use("/register",formRouter)


// app.listen(port,()=>{
//     console.log("sever is started at port "+port)
// })

import express from "express";
import "dotenv/config";
import cors from "cors";
import { connectToDb } from "./connection/db.js";
import { formRouter } from "./routes/formRoutes.js";

const app = express();
const port = process.env.PORT || 8080; 

app.use(cors({origin:process.env.FRONT_END_PATH}))


// app.use(cors({
//     origin: process.env.FRONT_END_PATH,
//     methods: ['GET', 'POST'],
//     credentials: true,
// }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


(async () => {
    await connectToDb();
    app.listen(port, () => {
        console.log("Server is started at port " + port);
    });
})();

app.use("/register", formRouter);