
const { Logger} = require("../config/index")

class CrudRepository{

    constructor(model){
        this.model = model
    }

    async create(data){
        const response = await this.model.create(data)
        return response
    }

    async destroy(data){
        try{
            const response = await this.model.destroy({
                where : {
                    id : data
                }
            })
            return response
        } catch(error){
            Logger("Error occured at deleting record :", error)
            throw error
        }
    }

    async get(data){
        try{
            const response = await this.model.findByPK(data)
            return response
        } catch(error){
            Logger("Error occured at getting single record :", error)
            throw error
        }
    }

     async getAll(){
        try{
            const response = await this.model.findAll()
            return response
        } catch(error){
            Logger("Error occured at getting all records :", error)
            throw error
        }
    }

    async update(data){  // data -> {key : value, ...}
        try{
            const response = await this.model.update(data, {
                where: {
                    id : id
                }
            })
            return response
        } catch(error){
            Logger("Error occured at getting all records :", error)
            throw error
        }
    }
}

module.exports = CrudRepository