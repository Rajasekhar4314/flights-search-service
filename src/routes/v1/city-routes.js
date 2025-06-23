
const express = require("express")

const router = express.Router()

const { CityController } = require("../../controllers/index")
const { CityMiddlewares } = require("../../middlewares/index")

//  /api/v1/cities POST
router.post("/", CityMiddlewares.validateCreateRequest,  CityController.createCity)

module.exports = router;
