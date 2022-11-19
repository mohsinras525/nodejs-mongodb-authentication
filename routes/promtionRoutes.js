const express = require('express')
const { addPromotion, getPromotions, getOnePromotion, deletePromotion } = require('../controller/promtionController')
const router = express.Router()


router.route("/addpromotion").post(addPromotion)
router.route("/getpromotions").get(getPromotions)
router.route("/:id").get(getOnePromotion)
router.route("/:id").delete(deletePromotion)


module.exports = router