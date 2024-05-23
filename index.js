const express = require("express") ;
const EventEmitter = require("events") ;
const app = express() ;

//EVENT EMIITER instance
const event = new EventEmitter() ;
let count = 0 ;

//EVENT LISTER
event.on("COUNT" , () => {
    count++ ;
    console.log("EVENT CALLED ", count) ;
})


app.get("/" , (req, res) => {
    res.send("This is home page");
    event.emit("COUNT") ; //EMIT A COUNT EVENT
})

app.get("/about" , (req, res) => {
    res.send("This is about page")
    event.emit("COUNT") ; //EMIT A COUNT EVENT
})

app.get("/contact" , (req, res) => {
    res.send("This is contact page")
    event.emit("COUNT") ; //EMIT A COUNT EVENT
})

app.get("/history" , (req, res) => {
    res.send("This is history page")
})

app.listen(4500) ;