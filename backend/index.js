import express from "express"; 
import cors from "cors"; 
import multer from "multer"; 
import { dbConnection } from "./utils/config.js";
import { authRoute } from "./authours/auth.js";

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
// jo bhi chez hoti hai vo app.use se guzarti hai 

// ROUTE
app.use("/auth", authRoute);
// app.use("/user", userRoute);
// app.use("/post", postRoute);
dbConnection();
// server setup
const port = 4000;
app.listen(port, ()=>{
    console.log(`server started at http://localhost:${port}`);
})
