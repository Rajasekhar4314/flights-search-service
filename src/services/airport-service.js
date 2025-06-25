

const { StatusCodes } = require("http-status-codes");
const { AirportRepository } = require("../repositories/index");
const { AppError } = require("../utils/errors/app-error");

const airportRepository = new AirportRepository();

async function createAirport(data) {
    try {
        const airport = await airportRepository.create(data);
        return airport;
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
        throw new AppError("can't create a new airport object", StatusCodes.INTERNAL_SERVER_ERROR)    
    }
}

async function getAirports() {
    try {
        const airport = await airportRepository.getAll();
        return airport;
    } catch (error) {
        throw new AppError("can't fetch all airport recordS", StatusCodes.INTERNAL_SERVER_ERROR)    
    }
}

async function getAirport(id) {
    try {
        const airport = await airportRepository.get(id)
        return airport;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airport you requested is Not present", error.statusCode)    
        }
        throw new AppError("can't fetch a airport record", StatusCodes.INTERNAL_SERVER_ERROR)    
        
    }
}


async function destroyAirport(id) {
    try {
        const airport = await airportRepository.destroy(id)
        return airport;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airport you requested to Delete is Not present.", error.statusCode)    
        }
        throw new AppError("can't delete a airport record", StatusCodes.INTERNAL_SERVER_ERROR)    
        
    }
}



async function updateAirport(data) {
    try {
        const airport = await airportRepository.update(data)
        return airport;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airport you requested to update is Not present.", error.statusCode)    
        }
        throw new AppError("can't update a airport record", StatusCodes.INTERNAL_SERVER_ERROR)    
        
    }
}



module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}