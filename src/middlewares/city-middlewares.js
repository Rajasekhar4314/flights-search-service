
const { StatusCodes } = require("http-status-codes")
const {ErrorResponse} = require("../utils/common/index")
const { AppError } = require("../utils/errors/app-error")

const validateCreateRequest = (req, res, next) => {
    if(!req.body.name){
        ErrorResponse.message =  "Something is went wrong while creating a city"
        
        ErrorResponse.error = new AppError(["City name is Not coming in the correct form"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    next();
}

module.exports = {
    validateCreateRequest
}