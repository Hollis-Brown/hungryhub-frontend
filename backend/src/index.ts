import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=> console.log("Connected to database!")) // A debugging bit of code to make sure the app is connected to the database and if it isn't it will crash.

const app = express();
app.use(express.json()) // Adds the middleware to automatically convert the body to any API server to json to avoid doing so for each request 
app.use(cors())

app.get("/test", async (req: Request, res: Response)=>{
    res.json({message: "Hello!" }); // When the backend server returns a request it's going to get this message
});

app.listen(7000, ()=> { // This is a function that will execute if the server starts successfully
    console.log("server started on localhost:7000");
});

// When the server starts the message above should be displayed and then it should be able to access a "/test" endpoint 