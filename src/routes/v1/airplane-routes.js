
const express = require("express")

const router = express.Router()

const { AirplaneController } = require("../../controllers/index")
const { AirplaneMiddlewares } = require("../../middlewares/index")

//  /api/v1/airplanes POST
router.post("/", AirplaneMiddlewares.validateCreateRequest, AirplaneController.createAirplane)

module.exports = router;