const { mainData } = require("../models/data.model");
 
async function getData(req, res) {
  const allData = await mainData.find() 
  res.send(allData);
}

async function getIdData(req, res) {
  const id = req.params.ID;
  const idData = await mainData.findById(id)
  if(!idData) 
    res.status(400).json({ error: "can not find id" })
  else
    res.send(idData)
}

async function postData(req, res) {
  if (!req.body.firstName && !req.body.lastName) {
    return res.status(400).json({ error: "name and lastname not add" });
  }
  let newdata = new mainData({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  let result = await newdata.save()

  res.json(result);
}

async function putIdData(req, res) {
  const putid = req.params.ID
  const putData = await mainData.findByIdAndUpdate(putid,{$set:{
    firstName:req.body.firstName,
    lastName:req.body.lastName
  }},{new:true})
  res.send(putData)
}

function deleteIdData(req, res) {
  const iddata = data.find((q) => q.id === parseInt(req.params.ID));
  if (!iddata) {
    return res.status(404).json({ error: "can not find data" });
  }
  const index = data.indexOf(iddata);
  data.splice(index, 1);
  res.send(iddata);
}

module.exports = {
  getData,
  getIdData,
  postData,
  putIdData,
  deleteIdData
}