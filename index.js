const express = require("express") ;
const multer = require("multer") ;
const app = express() ;

const upload = multer({
    storage:multer.diskStorage({
        destination: function(request , file , callback) {
            callback(null , "upload_file_here")
        },

        filename:function(req , file , callback){
            callback(null , file.fieldname+"_"+Date.now() + ".jpg")
        }
    })
}).single("upload_file_input_name") ;

//ROUTES
app.post("/upload" , upload , (req, res) => {
    res.send("File Upload") ;
})

app.listen(4500) ;