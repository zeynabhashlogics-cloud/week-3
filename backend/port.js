import express from "express";
import dotenv from "dotenv";

const app = express(); 

dotenv.config();
const port = process.env.PORT ||3001;
//array
const tasks =[
    {
        id :1,
        status:"done",
        priority:"low"
    },
    {
         id :2,
        status:"not done",
        priority:"low"
    },
    {
         id :3,
        status:"done",
        priority:"high"
    },
    {
        id :4,
        status:"done",
        priority:"medium"
    }
]
app.get("/health", (req, res) =>
 {
    res.json({
    "message" : "health works"
    });
});

app.get("/tasks", (req, res) => {
    res.json(tasks);
});

app.get("/info",(req,res) =>
{
    res.status(200).json(
        {
            number :"219392",
            version:3,
            type:"standard"

        }
    );
});

app.listen(port, () =>
     {
    console.log(`server is running on ${port}`);
});

