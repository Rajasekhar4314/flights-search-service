
const { StatusCodes } = require("http-status-codes")
const { AirportService } = require("../services/index")
const { ErrorResponse, SuccessResponse } = require("../utils/common/index");
const { AppError } = require("../utils");

/**
 * POST : /airports
 * req-body : {name : "IGI Airport", code: "DEL", cityId: 11, address: "new Delhi"} 
 */
async function createAirport(req, res) {
    try {
        const response = await AirportService.createAirport({
            name : req.body.name,
            code : req.body.code,
            cityId: req.body.cityId,
            address: req.body.address
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

/**
 * GET : /airports
 * req-body : {} 
 */
async function getAirports(req, res) {
    try {
        const response = await AirportService.getAirports();
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

/**
 * GET : /airports/:id
 * req-body : {}
 */
async function getAirport(req, res) {
    try {
        const id = req.params.id;
        const response = await AirportService.getAirport(id);
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

/**
 * DELETE : /airports/:id
 * req-body : {}
 */
async function destroyAirport(req, res) {
    try {        
        const response = await AirportService.destroyAirport(req.params.id);
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


/**
 * PATCH : /airports/
 * req-body : {name : "IGI Airport", code: "DEL", cityId: 11, address: "new Delhi"}
 */
async function updateAirport(req, res) {
    try {       
        const request = {
            id : req.body.id,
            name : req.body.name,
            code : req.body.code,
            cityId: req.body.cityId,
            address: req.body.address
        }
        const response = await AirportService.updateAirport(request);
        SuccessResponse.data = response
        return res.status(StatusCodes.CREATED)
            .json(SuccessResponse)

    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}