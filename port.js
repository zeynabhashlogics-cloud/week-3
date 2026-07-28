import express from "express";

const app = express();
const port = 3002;

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
    console.log("Server running on port 3002");
});

