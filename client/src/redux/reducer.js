import {  GET_DOGS, ORDER, FILTER } from "./action-types";

const initialState = {
    allDogs: [],
    originalDogs: []
}

 
const rootReducer = (state = initialState, action) => {
        switch (action.type) {

            case FILTER:
                if(action.payload === "All") return {
                    ...state,
                    allDogs: [...state.originalDogs]
                }
                return {
                    ...state, allDogs: [ ...state.originalDogs.filter( dog => {return dog.temperament.includes(action.payload)})]
                }

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

            case GET_DOGS:
                return {
                    ...state,
                    allDogs: action.payload,
                    originalDogs: action.payload
                }
        
            default:
                return {...state}
        }
}

export default rootReducer;