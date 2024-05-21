const express = require("express") ;
const app = express() ;

app.get("" , (req , res) => {
    res.send(`Hello , this is home page ${req.query.name}`) ;
})

app.get("/about" , (req , res) => {
    res.send("Hello , this is about page") ;
})

app.listen(4200)