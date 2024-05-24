const mysql = require("mysql") ;

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
}) ;

//DATABASE CONNECTION
con.connect((err) => {
    if(err) {
        console.log("502:DATABASE CONNECTION ERROR")
    }
    else{
        console.log("DATABASE CONNECTION SUCCESSFULL")
    }
}) ;





