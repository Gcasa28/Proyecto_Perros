import { GET_DOGS, ORDER, FILTER, CREATE_DOG, FILTER_DOG } from "./action-types";
import axios from "axios"

export const getDogs = () => {
  return async (dispatch) => {
      try {
          const response = await axios.get("http://localhost:3001/dogs");

          return dispatch({ 
            type: GET_DOGS, 
            payload: response.data })

      } catch (error) {
          console.error("Error fetching dogs:", error);
      }
  };
};

export const filterCards = (created) => {
  return {
    type: FILTER,
    payload: created
  }
}

export const orderCards = (orden) => {
    return {
      type: ORDER,
      payload: orden
    }
  }


  export function createDog(dog) {
    return async function(dispatch) {
        try {
            const response = await axios.post('http://localhost:3001/dogs', dog, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            dispatch({
                type: CREATE_DOG,
                payload: response.data,
            });
            dispatch(getDogs())
        } catch (error) {
            console.error('Error creating dog breed', error.response);
        } 
    }
  }

  export function filterDogs (created) {
    return {
      type: FILTER_DOG,
      payload: created
    }
  }