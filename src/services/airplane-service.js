
const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories/index");
const { AppError } = require("../utils/errors/app-error");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
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
        throw new AppError("can't create a new airplane object", StatusCodes.INTERNAL_SERVER_ERROR)    
    }
}

async function getAllAirplanes() {
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError("can't get all airplanes record", StatusCodes.INTERNAL_SERVER_ERROR)    
    }
}

async function getAirplanes(data) {
    try {
        const airplane = await airplaneRepository.get(data)
        return airplane;
    } catch (error) {
        throw new AppError("can't get a airplane record", StatusCodes.INTERNAL_SERVER_ERROR)    
        
    }
}

module.exports = {
    createAirplane
}