
const { StatusCodes } = require("http-status-codes")
const {ErrorResponse} = require("../utils/common/index")
const { AppError } = require("../utils/errors/app-error")

const validateCreateRequest = (req, res, next) => {
    if(!req.body.name){
        ErrorResponse.message =  "Something is went wrong while creating a airport"
        
        ErrorResponse.error = new AppError(["name is Not coming in the correct form"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.code){
        ErrorResponse.message =  "Something is went wrong while creating a airport"
        
        ErrorResponse.error = new AppError(["code is Not coming in the correct form"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.cityId){
        ErrorResponse.message =  "Something is went wrong while creating a airport"
        
        ErrorResponse.error = new AppError(["cityId is Not coming in the correct form"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    next();
}

module.exports = {
    validateCreateRequest
}