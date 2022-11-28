const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardCtl");
const verifyToken = require("../middleware/auth");

router.post("/create", verifyToken, cardController.createCard);
router.put("/levelup", verifyToken, cardController.levelUpCard);

module.exports = router;
