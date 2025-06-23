const AirplaneRepository = require("./airplane-repository");
const CityRepository = require("./city-repository");
const CrudRepository = require("./crud-repository");

module.exports = {
    AirplaneRepository : require("./airplane-repository"),
    CrudRepository : require("./crud-repository"),
    CityRepository: require("./city-repository")
}