
const express = require("express");

const router = express.Router();

const { InfoController } = require("../../controllers/index")

const airplaneRoutes = require("./airplane-routes")

// router.get("/info", (req, res) => {
//     return res.json({msg : "Ok"})
// })

router.get("/info", InfoController.info)

router.use("/airplanes", airplaneRoutes)

module.exports = router;