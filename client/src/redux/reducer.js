import {  GET_DOGS, ORDER, FILTER, CREATE_DOG, FILTER_DOG } from "./action-types";

const initialState = {
    allDogs: [],
    originalDogs: []
}

 
const rootReducer = (state = initialState, action) => {
        switch (action.type) {
            
            case GET_DOGS:
                return {
                    ...state,
                    allDogs: action.payload,
                    originalDogs: action.payload
                }

                case FILTER:
                    if(action.payload === "All") {
                        return {
                            ...state,
                            allDogs: [...state.originalDogs]
                        }
                    }
                    
                    const filteredDogs = state.originalDogs.filter(dog => {
                        if (!dog.temperaments) {
                            return action.payload === "sin temperamento";
                        }
                        const temperamentsArray = dog.temperaments.split(", ").map(temp => temp.trim());
                        return temperamentsArray.includes(action.payload);
                    });
                
                    return {
                        ...state, 
                        allDogs: filteredDogs
                    };

                case ORDER:
                    const orderCopy = [...state.allDogs];
                    if (action.payload === "Ascendente") {
                        orderCopy.sort((a, b) => {
                            if (a.name < b.name) return -1;
                            if (a.name > b.name) return 1;
                            return 0;
                        });
                    }
                    if (action.payload === "Descendente") {
                        orderCopy.sort((a, b) => {
                            if (a.name > b.name) return -1;
                            if (a.name < b.name) return 1;
                            return 0;
                        });
                        }
                    if (action.payload === "PesoDescendente") {
                        orderCopy.sort((a, b) => {
                            if (a.weight > b.weight) return -1;
                            if (a.weight < b.weight) return 1;
                            return 0;
                        });
                        }
                    if (action.payload === "PesoAscendente") {
                        orderCopy.sort((a, b) => {
                            if (b.weight > a.weight) return -1;
                            if (b.weight > a.weight) return 1;
                            return 0;
                        });
                        }
                    return {
                        ...state,
                        allDogs: orderCopy
                    };


            case CREATE_DOG:
                return {
                    ...state,
                    allDogs: action.payload,
                } 

            case FILTER_DOG:
                if(action.payload === "todos") {
                    return {
                        ...state,
                        allDogs: [...state.originalDogs]
                    }
                }
                if(action.payload === "api") {
                    return {
                        ...state,
                        allDogs: [...state.originalDogs].filter((dog) => {
                            return dog.created === false
                        })
                    }
                }
                if(action.payload === "bdd") {
                    return {
                        ...state,
                        allDogs: [...state.originalDogs].filter((dog) => {
                            return dog.created === true
                        })
                    }
                }
            
            
        
            default:
                return {...state}
        }
}

export default rootReducer;