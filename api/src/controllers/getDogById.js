const axios = require("axios");
const { extractDogInfo } = require("../utils")
const { Dog } = require('../db.js')


const getDogById = async (id, source) => {

    const dog = source === "api"
        ? (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)).data
        : await Dog.findByPk(id)

        if (source === "api") {
            return extractDogInfo(dog)
        } else {
            return dog
        }
}


module.exports = getDogById