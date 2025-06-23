
const express = require("express")

const router = express.Router()

const { CityController } = require("../../controllers/index")
const { CityMiddlewares } = require("../../middlewares/index")

//  /api/v1/cities POST
router.post("/", CityMiddlewares.validateCreateRequest,  CityController.createCity)

//  /api/v1/cities GET
router.get("/",  CityController.getCities)

//  /api/v1/cities GET
router.get("/:id",  CityController.getCity)

//  /api/v1/cities PATCH
router.patch("/",  CityController.updateCity)

//  /api/v1/cities DELETE
router.delete("/:id",  CityController.destroyCity)

module.exports = router;
