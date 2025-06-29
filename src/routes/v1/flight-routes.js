

const express = require("express")

const router = express.Router()

const { FlightController } = require("../../controllers/index")
const { FlightMiddlewares } = require("../../middlewares/index")

//  /api/v1/flights POST
router.post("/", FlightMiddlewares.validateCreateRequest, FlightController.createFlight)

//  /api/v1/flights?query=MUM-HYD   GET
router.get("/", FlightController.getAllFlights)

//  /api/v1/flights/:id   GET
router.get("/:id", FlightController.getFlight)

//  /api/v1/flights/:id/seats   PATCH
router.patch ("/:id/seats", FlightMiddlewares.validateUpdateSeatsRequest ,FlightController.updateSeats)


module.exports = router;