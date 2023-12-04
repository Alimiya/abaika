const express = require("express")
const workController = require("../controllers/workController")
const loginController = require("../controllers/loginController")
const router = express.Router()

router.get('/',workController.getWork)
router.get('/search',workController.Search)
router.get('/get',workController.Work)
router.get('/logout', loginController.Logout)

module.exports = router
