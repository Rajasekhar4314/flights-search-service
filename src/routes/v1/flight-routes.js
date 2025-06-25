

const express = require("express")

const router = express.Router()

const { FlightController } = require("../../controllers/index")
const { FlightMiddlewares } = require("../../middlewares/index")

//  /api/v1/airplanes POST
router.post("/", FlightMiddlewares.validateCreateRequest, FlightController.createFlight)


module.exports = router;