import express from "express";


 const Router = express.Router();

Router.get("/",(req, res)=>{res.send("hey i am auth router")})
export default Router