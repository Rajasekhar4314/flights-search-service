const { StatusCodes } = require("http-status-codes")
const { AirplaneService } = require("../services/index")
const { ErrorResponse, SuccessResponse } = require("../utils/common/index");
const { AppError } = require("../utils");

/**
 * POST : /airplanes
 * req-body : {modelNumber : "airbus-234", capacity : 200} 
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

/**
 * GET : /airplanes
 * req-body : {} 
 */
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

/**
 * GET : /airplane/:id
 * req-body : {}
 */
async function getAirplane(req, res) {
    try {
        const id = req.params.id;
        const response = await AirplaneService.getAirplane(id);
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
 * DELETE : /airplane/:id
 * req-body : {}
 */
async function destroyAirplane(req, res) {
    try {        
        const response = await AirplaneService.destroyAirplane(req.params.id);
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
 * PATCH : /airplane/
 * req-body : {id : 1, modelnumber: "a150", capacity : 140}
 */
async function updateAirplane(req, res) {
    try {       
        const request = {
            id : req.body.id,
            modelNumber : req.body.modelNumber,
            capacity: req.body.capacity
        } 
        const response = await AirplaneService.updateAirplane(request);
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
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}