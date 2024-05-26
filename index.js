const express = require("express") ;
const con = require("./config")
const app = express() ;

app.get("/" , (req, res) => {
    con.query("select * from users" , (err, result) => {
        if(err) {
            res.send("Error : fetching user data")
        }
        else{
            res.send(result)
        }
    }) ;
})

//POST API
app.use(express.json())
app.post("/" , (req, res) => {
    const data = req.body ;
    con.query("INSERT into users set ?" , data , (err , result, fields) => {
        if(err) {
            console.log("ERROR - POST USER" , err) ;
        }
        else{
            res.send(result) ;
        }
    })
})

app.listen(4500) ;