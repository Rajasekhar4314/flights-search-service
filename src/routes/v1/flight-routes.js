

const express = require("express")

const router = express.Router()

const { FlightController } = require("../../controllers/index")
const { FlightMiddlewares } = require("../../middlewares/index")

//  /api/v1/airplanes POST
router.post("/", FlightMiddlewares.validateCreateRequest, FlightController.createFlight)

//  /api/v1/airplanes?query=MUM-HYD   GET
router.get("/", FlightController.getAllFlights)



module.exports = router;