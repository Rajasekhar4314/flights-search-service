
const { StatusCodes } = require("http-status-codes")
const {ErrorResponse} = require("../utils/common/index")
const { AppError } = require("../utils/errors/app-error")

const validateCreateRequest = (req, res, next) => {
    if(!req.body.modelNumber){
        ErrorResponse.message =  "Something is went wrong while creating a airplane"
        
        ErrorResponse.error = new AppError(["model number is Not coming in the correct form"], StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    next();
}

module.exports = {
    validateCreateRequest
}