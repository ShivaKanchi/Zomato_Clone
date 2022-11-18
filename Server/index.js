import express from 'express';


//env
import dotenv from 'dotenv';
dotenv.config();
//DB Connection
import dbconnection from './database/dbconnection';
const zomato = express(); //like app    

zomato.use(express.json());

zomato.get("/", (req, res) => {
    res.json({
        message: "Server is up"
    });
});

zomato.listen(4000, () => {
    console.log("Server up"); //port 4000
    dbconnection()
        .then(() => {
            console.log("DB connected");
        })
        .catch((error) => {
            console.log("Server up but db connection failed");
            console.log(error);
        })
});