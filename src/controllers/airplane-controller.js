const { StatusCodes } = require("http-status-codes")
const { AirplaneService } = require("../services/index")
const { ErrorResponse, SuccessResponse } = require("../utils/common/index");
const { AppError } = require("../utils");

/**
 * POST : /airplanes
 * req-body : {modelNumber : "airbus-234", capacity : 200}
 * 
 */

async function createAirplane(req, res) {
    try {
        const response = await AirplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
        })
        SuccessResponse.data = response; 
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

async function getAirplanes(req, res) {
    try {
        const response = await AirplaneService.getAirplanes();
        SuccessResponse.data = response
        return res.status(StatusCodes.OK)
            .json(SuccessResponse)

    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
}