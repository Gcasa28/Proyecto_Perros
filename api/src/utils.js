const {Temperament} = require("./db")
const axios = require("axios")

const API_KEY = "live_OqlGPmpiVXajxX6yIk14fQvRsBthN6984m70GRe7Sd03Jrj6cDYZbzdbKIYr90R8"

const extractDogInfo = (dog) => {
    return {
        id: dog.id,
        name: dog.name,
        weight: media(dog.weight?.metric),
        height: dog.height?.metric, 
        years: dog.life_span,
        temperament: separadorTemperamentos(dog.temperament),
        image: dog.image?.url,
        created: false
    }
}

const media = (string) => {
  const numeros = string.split(" ").map(num => parseFloat(num)).filter(num => !isNaN(num));
    if (numeros.length === 0) {
      return 0
    }
  const suma = numeros.reduce((total, num) => total + num, 0);
  const media = suma / numeros.length;
  return media;
};

const separadorTemperamentos = (temperamentos) => {
  if (temperamentos) {
    return temperamentos.split(",").map(temp => temp.trim());
  }
  return [];
};

const checkIfEmpty = async () => {
    try {
        const count = await Temperament.count();
        const empty = count === 0 ? true : false
        return empty;
    } catch (error) {
        console.error('Error al verificar si la tabla está vacía:', error)
        throw error
    }
};

  const populateTypes = async () => {
    try {
      const { data } = await axios.get("https://api.thedogapi.com/v1/breeds/");
  
      const temperamentos = new Set();
  
      data.forEach(dog => {
        if (dog.temperament) {
          dog.temperament.split(",").map(t => t.trim()).forEach(t => temperamentos.add(t));
        }
      });
  
      const dogsTemperamentos = Array.from(temperamentos).map(temp => ({ name: temp }));
  
      await Temperament.bulkCreate(dogsTemperamentos, {
        ignoreDuplicates: true, 
      });
  
      return Array.from(temperamentos);
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching temperaments');
    }
  };
  



module.exports = { API_KEY, extractDogInfo, checkIfEmpty, populateTypes }