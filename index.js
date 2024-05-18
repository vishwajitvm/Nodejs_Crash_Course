const fs = require('fs') ;

/* 
arg0 - node path in system
arg1 - project path
arg2 - paramter from console
arg3 - parameter from console
*/
const input = process.argv ;
if(input[2] == "ADD" ) {
    fs.writeFileSync(input[3] , input[4])
}
else if(input[2] == "UPDATE" ) {
    fs.writeFileSync(input[3] , input[4])
}
else if(input[2] == "REMOVE") {
    fs.unlinkSync(input[3])
}
else {
    console.log("Invalid paramter") ;
}
