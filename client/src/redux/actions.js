import { GET_DOGS, ORDER, FILTER } from "./action-types";
import axios from "axios"

export const getDogs = () => {
  return async (dispatch) => {
      try {

          const response = await axios.get("http://localhost:3001/dogs/");

          dispatch({ 
            type: GET_DOGS, 
            payload: response.data })

      } catch (error) {
          console.error("Error fetching dogs:", error);
      }
  };
};

export const orderCards = (orden) => {
    return {
      type: ORDER,
      payload: orden
    }
  }

  export const filterCards = (gender) => {
    return {
      type: FILTER,
      payload: gender
    }
  }