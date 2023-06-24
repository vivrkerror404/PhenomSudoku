var express = require("express");
var router = express.Router();
const { startGame, moveElementInSudoku } = require("../handlers");

router.post("/", startGame);

router.post("/move", moveElementInSudoku);

module.exports = router;
