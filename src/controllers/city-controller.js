
const { StatusCodes } = require("http-status-codes")
const { CityService } = require("../services/index")
const { ErrorResponse, SuccessResponse } = require("../utils/common/index");
const { AppError } = require("../utils");

/**
 * POST : /city
 * req-body : {name : "HYD"} 
 */
async function createCity(req, res) {
    try {
        const response = await CityService.createCity({
            name : req.body.name,
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

module.exports = {
    createCity
}