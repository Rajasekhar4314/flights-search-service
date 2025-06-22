
const express = require("express")

const router = express.Router()

const { AirplaneController } = require("../../controllers/index")
const { AirplaneMiddlewares } = require("../../middlewares/index")

//  /api/v1/airplanes POST
router.post("/", AirplaneMiddlewares.validateCreateRequest, AirplaneController.createAirplane)

//  /api/v1/airplanes GET
router.get("/", AirplaneController.getAirplanes) 

//  /api/v1/airplanes/:id  GET
router.get("/:id", AirplaneController.getAirplane) 

//  /api/v1/airplanes/:id  POST
router.delete("/:id", AirplaneController.destroyAirplane) 

//  /api/v1/airplanes/  PATCH
router.patch("/", AirplaneController.updateAirplane) 


module.exports = router;