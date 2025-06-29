
const { StatusCodes } = require("http-status-codes")
const { FlightService } = require("../services/index")
const { ErrorResponse, SuccessResponse } = require("../utils/common/index");
const { AppError } = require("../utils");

/**
 * POST : /airplanes
 * req-body : {
 *  flightNumber : "Uk-623",
    airplaneId : 2342,
    departureAirportId : 15,
    arrivalAirportId : 10,
    arrivalTime : 11.00:13,
    departureTime : 15.14:30,
    price : 3400,
    boardingGate : "A20",
    totalSeats : 150,
 * 
 * } 
 */
async function createFlight(req, res) {
    try {
        const flight = await FlightService.createFlight({
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime : req.body.arrivalTime,
            departureTime : req.body.departureTime,
            price : req.body.price,
            boardingGate : req.body.boardingGate,
            totalSeats : req.body.totalSeats,
        })
        SuccessResponse.data = flight; 
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

async function getAllFlights(req, res) {
    try {
        const flights =  await FlightService.getAllFlights(req.query);
        SuccessResponse.data = flights; 
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
 * GET : /flights/:id
 * req-body : {}
 */
async function getFlight(req, res) {
    try {
        const id = req.params.id;
        const flight = await FlightService.getFlight(id);
        SuccessResponse.data = flight
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
    createFlight,
    getAllFlights,
    getFlight,
}