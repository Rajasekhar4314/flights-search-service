

const express = require("express")

const router = express.Router()

const { AirportController } = require("../../controllers/index")
const { AirportMiddlewares } = require("../../middlewares/index")

//  /api/v1/airports POST
router.post("/", AirportMiddlewares.validateCreateRequest, AirportController.createAirport)

//  /api/v1/airports GET
router.get("/", AirportController.getAirports) 

//  /api/v1/airports/:id  GET
router.get("/:id", AirportController.getAirport) 

//  /api/v1/airports/:id  DELETE
router.delete("/:id", AirportController.destroyAirport) 

//  /api/v1/airports/  PATCH
router.patch("/", AirportController.updateAirport) 


module.exports = router;