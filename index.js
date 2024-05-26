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

app.listen(4500) ;