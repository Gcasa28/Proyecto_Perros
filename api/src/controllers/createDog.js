const { Dog, Temperament } = require('../db')

const createDog = async (name, image, years, height , weight, temperamentId1 , temperamentId2) => {

    const newDog = await Dog.create({name, image, years, height, weight});

    // const temperamentPromises = temperaments.map(name => Temperament.findOrCreate({ where: { name } }));
    

    // const temperamentResults = await Promise.all(temperamentPromises);

    // const temperamentsToAdd = temperamentResults.map(result => result[0]);

    // await newDog.addTemperaments(temperamentsToAdd);
    // return newDog
    if (temperamentId1) {
        const temperament1 = await Temperament.findByPk(temperamentId1);
        const dog1 = await Dog.findByPk(newDog.id);
        await temperament1.addDog(dog1);
    }
    
    if (temperamentId2) {
        const temperament2 = await Temperament.findByPk(temperamentId2);
        const dog2 = await Dog.findByPk(newDog.id);
        await temperament2.addDog(dog2);
    }

}

module.exports = createDog