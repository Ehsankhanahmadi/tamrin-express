const express = require("express")
const app = express()
const PORT = 2025

// express khode ststuse code hara ersal mikonad 
// 404 khodcar darad
// content-type ha ra khodash tashkhis midahad
// keili az carhara rahat mikonad
app.get('/',(req , res) => {
    res.send("hi express")
})

app.listen(PORT,()=>{
    console.log(`
        http://127.0.0.1:${PORT}
        `)
})