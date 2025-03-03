const express = require("express");
const imgrouter = express.Router();
const {img} = require('../controllers')

imgrouter.get("/",img)

module.exports = {imgrouter}