
const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repositories/index");
const { AppError } = require("../utils/errors/app-error");

const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        // Client Errors
        if(error.name === "SequelizeValidationError"){
            let explanation = []
            error.errors.forEach(element => {
                explanation.push(element.message)
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        } 
        // Server Errors
        throw new AppError("can't create a new flight object", StatusCodes.INTERNAL_SERVER_ERROR)    
    }
}

module.exports = {
    createFlight,
 
}