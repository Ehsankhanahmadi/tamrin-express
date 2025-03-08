const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/data")
  .then(() => console.log("conect to database"))
  .catch(err => console.log(err))

const Data = new mongoose.Schema({
  firstName:{type:String,required:true},
  lastName:{type:String,required:true},
})

const mainData = mongoose.model("mainData", Data)

module.exports = {
  mainData
}
