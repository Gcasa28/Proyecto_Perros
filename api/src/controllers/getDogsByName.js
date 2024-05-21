const axios = require("axios")
const { extractDogInfo } = require("../utils")
const { Op } = require("sequelize")
const { Dog } = require("../db")





const getDogsByName = async (name) => {

    const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)

    const dogApi = data.map( dog => {
        return extractDogInfo(dog)
    })

    const dogDB = await Dog.findAll({
        where: {
            name: {
                [Op.like]: `%${name}%`
            }}})

    const allDogs = [...dogApi, ...dogDB]

    return allDogs
}

module.exports = getDogsByName