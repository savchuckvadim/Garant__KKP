import { CHANGE_CURRENT_ER, CHANGE_CURRENT_INFOBLOCKS, CHANGE_CURRENT_PAKETS_ER, CREATE_COMPLECT } from "./currentComplect-reducer";

const WEIGHT = 'WEIGHT'

export const weight = (currentWeight) => ({ type: WEIGHT, currentWeight})

const initialState = {
    currentWeight: 0
}


const weightReducer = (state = initialState, action) => {

    switch (action.type) {
        case WEIGHT:
           
            return {...state, currentWeight: action.currentWeight};
    
        default:
            return state;
    }
}

export default weightReducer