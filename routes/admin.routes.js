const express = require("express")
const { getAllUsers, promoteUser, blockedUser, getLogs } = require("../controllers/adminController")
const authMiddleware = require("../middleware/authMiddleware")
const roleMiddleware = require("../middleware/roleMiddleware")
const router = express.Router()

router.get("/users",authMiddleware, roleMiddleware("admin"), getAllUsers)
router.put("/promote/:id",authMiddleware, roleMiddleware("admin"),promoteUser)
router.put("/block/:id", authMiddleware, roleMiddleware("admin"),blockedUser)
router.get(
  "/logs",
  authMiddleware,
  roleMiddleware("admin"),
  getLogs
)

module.exports = router