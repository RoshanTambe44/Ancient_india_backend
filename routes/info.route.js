const express = require("express");
const router= express.Router();
const {getInfoByName, getAllInfo} = require("../controller/info.controller")


router.get('/infos', getAllInfo );
router.get('/info/:name', getInfoByName );



module.exports = router;