const express = require("express");
const router = express.Router();
const matchController = require("../controllers/matchCtl");
const verifyToken = require("../middleware/auth");

// @router POST api/auth/register
// @Register user
// @access public
router.post("/create", verifyToken, matchController.create);

module.exports = router;
