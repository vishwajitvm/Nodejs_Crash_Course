const fs = require("fs") ;
const path = require("path") ;
const dirName = path.join(__dirname, 'file_store');


//File we are gona create 
const newFileName = `${dirName}/helloWorld.txt` ;
const message = "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."

const newMessageToAppend = "VISHWAJIT VM IS THE BEST DEVELOPER IN THIS WORLD AROUND EM" ;

//WRITE somting in file
// const GenrateNewFile = fs.writeFileSync(newFileName , message) ;

//READ CURRENT FILE  - wjich we recently genrated
const readFile = fs.readFile(newFileName   , (err , item) => {
    console.log("Read File"  , item)
})

//APPEND NEW TEXT IN CURRENT FILE - which we genrated
// fs.appendFile(newFileName , newMessageToAppend , (err) => {
//     if(!err) {
//         console.log("File Append successfully")
//     }
// })

//RENAME FILE NAME
const renameFIleName = `${dirName}/vishwajitVM.txt` ;
// fs.rename(newFileName , renameFIleName , (err) => {
//     console.log("FILE RENAME SUCCESSFULLY")
// })

//DLETE UNUSED FILE NAME
// fs.unlink(renameFIleName , (err) => {
//     console.log("FILE DELETE SUCCESFULLY") ;
// })