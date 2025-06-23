
const { CityRepository } = require("../repositories/index")
const { StatusCodes } = require("http-status-codes")

const { AppError } = require("../utils/errors/app-error");

const cityRepository = new CityRepository();

async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        // Client Errors
        if(error.name === "SequelizeValidationError" || error.name ===  "SequelizeUniqueConstraintError"){
            let explanation = []
            error.errors.forEach(element => {
                explanation.push(element.message)
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        } 
        // Server Errors
        throw new AppError("can't create a new city object", StatusCodes.INTERNAL_SERVER_ERROR)    
    }
}

async function getCities() {
    try {
        const cities = await cityRepository.getAll();
        return cities;
    } catch (error) {
        throw new AppError("Can't get all Cities records", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function getCity(id) {
    try {
        const city = await cityRepository.get(id);
        return city;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError("The City you requested is Not present", StatusCodes.NOT_FOUND)
        }
        throw new AppError("Can't get City record", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function updateCity(data) {
    try {
        const response = await cityRepository.update(data);
        return response;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError("The City you requested to update is Not present", StatusCodes.NOT_FOUND)
        }
        throw new AppError("Can't Update City record", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function destroyCity(id) {
    try {
        const response = await cityRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError("The City you requested to Delete is Not present", StatusCodes.NOT_FOUND)
        }
        throw new AppError("Can't Delete City record", StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
module.exports = {
    createCity,
    getCities,
    getCity,
    updateCity,
    destroyCity
}
