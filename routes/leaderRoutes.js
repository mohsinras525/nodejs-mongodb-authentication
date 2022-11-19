const express = require('express')
const router = express.Router()
const { addLeader, getLeaders, getLeader, deleteLeader } = require('../controller/leaderController')

router.route("/addleader").post(addLeader)
router.route("/getleaders").get(getLeaders)
router.route("/:id").get(getLeader)
router.route("/:id").delete(deleteLeader)


module.exports = router