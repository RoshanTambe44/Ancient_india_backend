const express = require("express");
const router= express.Router();
const { getAllWarriors, getWarriorByName } = require("../controller/warrior.controller");




router.get('/warriors', getAllWarriors);
router.get('/warrior/:name', getWarriorByName);




module.exports = router;