const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get("/student/studentList", (req, res)=>{
    res.send({
        "results": [
        "Rajesh",
        "Ramesh",
        "Sayali",
        "Sanjana"
        ]
       })
})
app.listen(port, ()=>{
    console.log("The port is running on 8080");
})