
const INTERNET = 'Интернет'
const PROKSIMA = 'Проксима'
const UNIVERSAL = 'Универсальные'
const PROF = 'ПРОФ'

export const SET_SUPPLY = 'SET_SUPPLY'
const SET_COMPLECTS_TYPE = 'SET_COMPLECTS_TYPE'


const initialState = {
    supply: PROKSIMA,
    //supply index = 0 -> current - PROXIMA
    //supply index = 1 -> current - INTERNET
    compectsType: PROF
}
// AC
export const setSupply = (index) => ({ type: SET_SUPPLY, index }) //if index == 0 -> INTERNET, else -> PROKSIMA

const globalParametersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_SUPPLY:

            if (action.index === 1) {
                return { ...state, supply: PROKSIMA }
            } else if (action.index === 0) {
                return { ...state, supply: INTERNET }
            }
            return state

        default:
            return state;
    }
}

export default globalParametersReducer