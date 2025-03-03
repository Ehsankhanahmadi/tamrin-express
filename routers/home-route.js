const express = require("express");
const homerouter = express.Router();
const { homepage } = require("../controllers");

// express khode ststuse code hara ersal mikonad
// 404 khodcar darad
// content-type ha ra khodash tashkhis midahad
// keili az carhara rahat mikonad
homerouter.get("", homepage);

module.exports = { homerouter };
