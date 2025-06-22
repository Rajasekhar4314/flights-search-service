
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

async function getAirplanes() {
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError("can't fetch all airplane recordS", StatusCodes.INTERNAL_SERVER_ERROR)    
    }
}

async function getAirplane(id) {
    try {
        const airplane = await airplaneRepository.get(id)
        return airplane;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airplane you requested is Not present", error.statusCode)    
        }
        throw new AppError("can't fetch a airplane record", StatusCodes.INTERNAL_SERVER_ERROR)    
        
    }
}


async function destroyAirplane(id) {
    try {
        const airplane = await airplaneRepository.destroy(id)
        return airplane;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airplane you requested to Delete is Not present.", error.statusCode)    
        }
        throw new AppError("can't delete a airplane record", StatusCodes.INTERNAL_SERVER_ERROR)    
        
    }
}



async function updateAirplane(data) {
    try {
        const airplane = await airplaneRepository.update(data)
        return airplane;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airplane you requested to update is Not present.", error.statusCode)    
        }
        throw new AppError("can't update a airplane record", StatusCodes.INTERNAL_SERVER_ERROR)    
        
    }
}



module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}