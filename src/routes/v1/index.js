
const express = require("express");

const router = express.Router();


const airplaneRoutes = require("./airplane-routes")
const cityRoutes = require("./city-routes")
const aiportRoutes = require("./airport-routes")
const flightRoutes = require("./flight-routes")
// router.get("/info", (req, res) => {
//     return res.json({msg : "Ok"})
// })


router.use("/airplanes", airplaneRoutes)
router.use("/cities", cityRoutes)
router.use("/airports", aiportRoutes)
router.use("/flights", flightRoutes)


module.exports = router;