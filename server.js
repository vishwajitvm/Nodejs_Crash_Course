const express = require("express") ;
const devenv = require("devenv") ;
const port = process.env.PORT || 5001;

const app = express();
app.use(express.json()) ;

app.listen(port , () => {
    console.log("Server running at port : " , port)
})