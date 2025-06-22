
const express = require("express");

const router = express.Router();


const airplaneRoutes = require("./airplane-routes")

// router.get("/info", (req, res) => {
//     return res.json({msg : "Ok"})
// })


router.use("/airplanes", airplaneRoutes)

module.exports = router;