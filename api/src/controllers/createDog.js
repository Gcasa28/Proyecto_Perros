const { Dog, Temperament } = require('../db')

const createDog = async (name, image, years, height , weight, temperaments) => {


    const newDog = await Dog.create({name, image, years, height, weight, temperaments});

    const temperamentPromises = temperaments.map(name => Temperament.findOrCreate({ where: { name } }));
    
    const temperamentResults = await Promise.all(temperamentPromises);

    const temperamentsToAdd = temperamentResults.map(result => result[0]);

    await newDog.addTemperaments(temperamentsToAdd);
    return newDog

}

module.exports = createDog