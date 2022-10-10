import { CHANGE_CURRENT_ER, CHANGE_CURRENT_INFOBLOCKS, CHANGE_CURRENT_PAKETS_ER, CREATE_COMPLECT } from "./currentComplect-reducer";

const WEIGHT = 'WEIGHT'

export const weight = (infoblocks, encyclopedias) => ({ type: WEIGHT, infoblocks, encyclopedias })

const initialState = {
    currentWeight: 0
}


export const getWeight = (state, action) => {
    let info = 0;
    let er = 0;
    let totalweight = 0;
    
    // if (action.type === CREATE_COMPLECT) {
    //     console.log(action.obj)
    //     totalweight = action.obj.weight
    // } else {
        action.infoblocks.forEach(element => {
            element.value.forEach(elem => {
                if (elem.checked === true) {
                    info += elem.weight
                }
            })
        })

        action.encyclopedias.forEach(element => {
            element.value.forEach(elem => {

                if (elem.checked === true) {
                    er += elem.weight
                }
            })
        })

        totalweight = info + er

    // }
    console.log(state.currentWeight)
    state.currentWeight = totalweight
    return { ...state }

};


const weightReducer = (state = initialState, action) => {

    // if (action.type === CREATE_COMPLECT || action.type === CHANGE_CURRENT_INFOBLOCKS ||
    //     action.type === CHANGE_CURRENT_ER || action.type === CHANGE_CURRENT_PAKETS_ER) {
    //     return getWeight(state, action)

    // }
    // return state
    switch (action.type) {
        case WEIGHT:
           
            return getWeight(state, action);
    
        default:
            return state;
    }
}

export default weightReducer