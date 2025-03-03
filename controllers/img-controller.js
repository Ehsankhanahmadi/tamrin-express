const path = require("node:path")

function img(req , res){
    res.sendFile(path.join(__dirname,'..','public',"nature.jpg"))    
}

module.exports = {img}