const path = require("node:path")

function img(req , res){
    res.sendFile(path.join(__dirname,'..','public',"nature.jpg"))    
    // baraieh tamrin ast
    // res.render("test",{
    //     test:"this is a test text"
    // })
}

module.exports = {img}