const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardCtl");
const verifyToken = require("../middleware/auth");

// @router POST /api/card/create
// @Create card
// @access private
router.post("/create", verifyToken, cardController.createCard);

// @router PUT /api/card/levelup
// @Update card
// @access private
router.put("/levelup", verifyToken, cardController.levelUpCard);

// @router GET /api/card/
// @Update card
// @access private
router.get("/", verifyToken, cardController.getall);

module.exports = router;
