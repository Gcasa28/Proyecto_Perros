const createDog = require("../controllers/createDog")

createDogHandler = async (req, res) => {
    const {name, image, years, height, weight, temperaments} = req.body
    
    try {
        var newDog = await createDog(name.toLowerCase(), image, years, height, weight, temperaments)
    
        res.status(200).json(newDog)
    
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}





module.exports = createDogHandler