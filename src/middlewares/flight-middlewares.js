
const { StatusCodes } = require("http-status-codes")
const {ErrorResponse} = require("../utils/common/index")
const { AppError } = require("../utils/errors/app-error")
const { DateTimeResponse } = require("../utils/helper/index")

const validateCreateRequest = (req, res, next) => {
    if(!req.body.flightNumber){
        ErrorResponse.message =  "Something is went wrong while creating a flight"
        
        ErrorResponse.error = new AppError(["flightNumber is Not coming in the correct form"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.airplaneId){
        ErrorResponse.message =  "Something is went wrong while creating a flight"
        
        ErrorResponse.error = new AppError(["airplaneId is Not coming in the correct form"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.departureAirportId){
        ErrorResponse.message =  "Something is went wrong while creating a flight"
        
        ErrorResponse.error = new AppError(["departureAirportId is Not coming in the correct form"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.arrivalAirportId){
        ErrorResponse.message =  "Something is went wrong while creating a flight"
        
        ErrorResponse.error = new AppError(["arrivalAirportId is Not coming in the correct form"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.arrivalTime){
        ErrorResponse.message =  "Something is went wrong while creating a flight"
        
        ErrorResponse.error = new AppError(["arrivalTime is Not coming in the correct form"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.departureTime){
        ErrorResponse.message =  "Something is went wrong while creating a flight"
        
        ErrorResponse.error = new AppError(["departureTime is Not coming in the correct form"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }

    // compare the 2 timestamps
    const result = DateTimeResponse(req.body.arrivalTime, req.body.departureTime)
    if(!result){
        ErrorResponse.message =  "Something is went wrong while creating a flight"
        
        ErrorResponse.error = new AppError(["arrivalTime should greater than departureTime"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }

    if(!req.body.price){
        ErrorResponse.message =  "Something is went wrong while creating a flight"
        
        ErrorResponse.error = new AppError(["price is Not coming in the correct form"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.totalSeats){
        ErrorResponse.message =  "Something is went wrong while creating a flight"
        
        ErrorResponse.error = new AppError(["totalSeats is Not coming in the correct form"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    next();
}

module.exports = {
    validateCreateRequest
}