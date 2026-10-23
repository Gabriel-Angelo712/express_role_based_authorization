import express from "express";
import dotenv from "dotenv";

const app = express();

//middleware

app.use(express.json());

// Routes

// start the server
const port = process.PORT || 7002;

app.listen(port, () => console.log("Server is running"));
