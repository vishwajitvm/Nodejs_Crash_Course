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

//PUT API
app.put("/:id" , (req, res) => {
    // const data = ["ishu", "ishu@123" , "user" , 3] ;
    const data = [req.body.name , req.body.password , req.body.user_type , req.params.id] ;
    con.query("UPDATE users SET name = ? , password =  ? , user_type = ? where id = ?" , data , (err , result , fields) => {
        if(err) {
            console.log("ERROR - PUT USER" , err) ;
        }
        else{
            res.send([result , fields]) ;
        }
    })
})

//DELETE API
app.delete("/:id" , (req , res) => {
    con.query("DELETE FROM users WHERE id =" + req.params.id , (err , result , fields) => {
        if(err) {
            console.log("ERROR - DELETE USER" , err) ;
        }
        else{
            res.send([result , fields]) ;
        }
    })
})

app.listen(4500) ;