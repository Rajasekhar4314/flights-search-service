
const express = require("express");

const router = express.Router();


const airplaneRoutes = require("./airplane-routes")
const cityRoutes = require("./city-routes")
const aiportRoutes = require("./airport-routes")
// router.get("/info", (req, res) => {
//     return res.json({msg : "Ok"})
// })


router.use("/airplanes", airplaneRoutes)
router.use("/cities", cityRoutes)
router.use("/airports", aiportRoutes)


module.exports = router;