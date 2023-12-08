import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
// require("dotenv").config({path:"./env"})

dotenv.config({
  path: "./env",
});
connectDB();

/*
IIFE approach
 Just for demo purpose
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log("DB Connected");
        app.on("error", (err) => {
            console.error("ERROR: ", error)
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`Listening on PORT: ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
})()
*/
