
const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repositories/index");
const { AppError } = require("../utils/errors/app-error");
const { Op } = require('sequelize');

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

// https://www.flipkart.com/travel/flights/search?trips=BOM-HYD-27062025&travellers=1-0-0&class=e&tripType=ONE_WAY&isIntl=false&source=Search+Form&sort.BOM-HYD=price_DESC
async function getAllFlights(query) {
    let customFilter = {}
    let customSort = []
    // trips = query
    // http://localhost:3000/api/v1/flights?trips=HYD-MUM&price=4500
    if(query.trips){
        [departureAirportId, arrivalAirportId] = query.trips.split("-");
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId
    }
    // TODO: add a check that they are Not same.

    if(query.price){
        [minPrice, maxPrice] = query.price.split("-")
        customFilter.price = {
            //  define if maxPrice is not coming from UI/FE.
            [ Op.between ] : [minPrice, ((maxPrice == undefined) ? "20000" : maxPrice)]
        }
    }

    //  No of travellers. Assume totalSeats as seats_remaining. if seats_remaining >= 2 (or) 3 persons.
    // http://localhost:3000/api/v1/flights?travellers=2&tripDate=2025-07-01
    if(query.travellers){
        customFilter.totalSeats = {
            [Op.gte] : query.travellers
        }
    }

    // filter flights only on specific Date.
    if(query.tripDate){
        const tempTime = " 23:59:59" // 24hr format
        customFilter.departureTime = {
            [Op.between] : [ query.tripDate, query.tripDate + tempTime]
        }
    }

    // source=Search+Form&sort.BOM-HYD=price_DESC,departureTime_ASC
    // http://localhost:3000/api/v1/flights?sort=price_DESC,arrivalTime_DESC
    if(query.sort){
        let sample = query.sort.split(",")
        let common = sample.map(ele => ele.split("_"))
        customSort = common
    }

    try {
        const flights = await flightRepository.getAllFlights(customFilter, customSort);
        return flights;
        
    } catch (error) {
        throw new AppError("can't fetch data of all the flights", StatusCodes.INTERNAL_SERVER_ERROR)    
    }

}

module.exports = {
    createFlight,
    getAllFlights,
}