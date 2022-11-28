const express = require("express");
const router = express.Router();
const userController = require("../controllers/userCtl");
const verifyToken = require("../middleware/auth");

// @router POST api/auth/register
// @Register user
// @access public
router.put("/update", verifyToken, userController.updateProfile);
router.put("/changepassword", verifyToken, userController.updatePassword);
router.put("/changegold", verifyToken, userController.updateGold);

module.exports = router;
