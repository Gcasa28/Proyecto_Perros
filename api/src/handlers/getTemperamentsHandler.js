const {checkIfEmpty , populateTypes} = require('../utils')
const { Temperament } = require("../db")


const getTemperamentsHandler = async (req, res) => {
    try {
        const empty = await checkIfEmpty()
        if (empty) {
            const response = await populateTypes()
            res.status(200).json(response)
        } else {
            const temperaments = await Temperament.findAll();
            res.status(200).json(temperaments);
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = getTemperamentsHandler