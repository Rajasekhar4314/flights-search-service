
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

module.exports = {
    createCity,
}
