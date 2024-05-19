const fs = require("fs") ;
const path = require("path") ;

const dirPath = path.join(__dirname, 'store_files_here') ;
let message = "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."

//CREATE MULIPLE FILES - USING FOR LOOP
//dynamically create multiple file in store_files_here folder
// for(i = 0 ; i < 5 ; i++) {
//     fs.writeFileSync(`${dirPath}/user${i}.txt` , `Hello user ${i}, ${message}`) ;
//     console.log("created successfully") ;
// }


//READ THE LIST OF FILES
fs.readdir(dirPath, (err , files) => {
    files.forEach((file) => {
        console.log("FIle Name is" , file)
    })
});