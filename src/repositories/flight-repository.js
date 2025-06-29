
const CrudRepository = require("./crud-repository")
const { Flight, Airplane, Airport, City } = require("../models/index");
const sequelize = require("sequelize")
const db = require("../models/index")
const { addRowLockOnFlights } = require("./queries")

class FlightRepository extends CrudRepository {
    constructor(){
        super(Flight);
    }

    async getAllFlights(filter, sort){
        const response = await Flight.findAll({
            where: filter,
            order: sort,
            include: [
                {
                    model: Airplane, 
                    required : true,
                    as: "plane_Details"
                },
                {
                    model: Airport, 
                    required : true,
                    as : "departure_Airport",
                    on : {
                        col1: sequelize.where(sequelize.col("Flight.departureAirportId"), "=", sequelize.col("departure_Airport.code"))
                    }, 
                    include:[
                        {
                            model: City,
                            required: true
                        }
                    ]
                },
                {
                    model: Airport, 
                    required : true,
                    as : "arrival_Airport",
                    on : {
                        col1: sequelize.where(sequelize.col("Flight.arrivalAirportId"), "=", sequelize.col("arrival_Airport.code"))
                    }
                }
            ]
        })
        return response
    }

    // Update the noOfSeatsRemaining
    async updateRemainingSeats(flightId, seats, dec= 1) {
        // db.Sequelize.query
        await db.sequelize.query(addRowLockOnFlights(flightId))
        const flight = await Flight.findByPk(flightId)
        if(parseInt(dec)){
            await flight.decrement("totalSeats", { by : seats})
            
        } else {
            await flight.increment("totalSeats", { by : seats})
            
        }
        // await flight.save();
        return flight;
        
    }
}

module.exports = FlightRepository;