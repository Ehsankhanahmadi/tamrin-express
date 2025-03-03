const express = require("express");
const datarouter = express.Router();
const {
  getData,
  getIdData,
  postData,
  putIdData,
  deleteIdData,
} = require("../controllers");

datarouter.get("/", getData);

datarouter.get("/:ID", getIdData);

datarouter.post("/", postData);

datarouter.put("/:ID", putIdData);

datarouter.delete("/:ID", deleteIdData);

module.exports = { datarouter };
