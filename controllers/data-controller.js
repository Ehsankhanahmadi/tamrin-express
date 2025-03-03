const { data } = require("../models/data.model");

function getData(req, res) {
  res.send(data);
}

function getIdData(req, res) {
  const id = req.params.ID;
  if (data[id]) res.send(data[id]);
  else res.sendStatus(404);
}

function postData(req, res) {
  if (!req.body.name) {
    return res.status(400).json({ error: "name not add" });
  }
  const newdata = {
    id: data.length,
    name: req.body.name,
  };
  data.push(newdata);
  res.json(newdata);
}

function putIdData(req, res) {
  const onedata = data[parseFloat(req.params.ID)];
  if (!onedata) {
    return res.status(404).json({ error: "data not found" });
  }
  if (!req.body.name) {
    return res.json({ error: "data not add" });
  }
  onedata.name = req.body.name;
  res.json(onedata);
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