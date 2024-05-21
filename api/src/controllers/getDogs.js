const axios = require('axios')
const { API_KEY, extractDogInfo } = require("../utils")
const { Dog } = require("../db")


const getDogs = async () => {
    const {data} = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)

    
    const dogsApi = data.map( dog => {
        return extractDogInfo(dog)
        })

    const dogsDB = await Dog.findAll()

    const allDogs = [...dogsApi, ...dogsDB]
        
    return allDogs
    
}

module.exports = getDogs