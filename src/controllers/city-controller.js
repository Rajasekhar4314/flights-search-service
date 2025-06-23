
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

/**
 * GET : /airplane/
 * req-body : {}
 */
async function getCities(req, res) {
    try {
        const response = await CityService.getCities();
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode)
            .json(ErrorResponse)
    }
}

/**
 * GET : /airplane/:id
 * req-body : {}
 */
async function getCity(req, res) {
    try {
        const response = await CityService.getCity(req.params.id)
        SuccessResponse.data = response
        return res.status(StatusCodes.OK)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode)
            .json(ErrorResponse)
    }
}


/**
 * PATCH : /airplane/
 * req-body : {id : 1, name: "Bangaluru"}
 */
async function updateCity(req, res) {
    try {
        const request = {
            id: req.body.id,
            name: req.body.name
        }
        const response = await CityService.updateCity(request)
        SuccessResponse.data = response
        return res.status(StatusCodes.OK)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode)
            .json(ErrorResponse)
    }
}

/**
 * Delete : /cities/:id
 * req-body : {}
 */
async function destroyCity(req, res) {
    try {
        const response = await CityService.destroyCity(req.params.id)
        SuccessResponse.data = response
        return res.status(StatusCodes.OK)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode)
            .json(ErrorResponse)
    }
}



module.exports = {
    createCity,
    getCities,
    getCity,
    updateCity,
    destroyCity
}