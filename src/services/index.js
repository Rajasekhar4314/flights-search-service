const { CityRepository } = require("../repositories");

module.exports = {
    AirplaneService : require("./airplane-service"),
    CityService: require("./city-service"),
    AirportService: require("./airport-service"),
    FlightService: require("./flight-service")
}