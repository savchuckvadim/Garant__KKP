
const INTERNET = 'Интернет'
const PROKSIMA = 'Проксима'
const UNIVERSAL = 'Универсальные'
const PROF = 'ПРОФ'

const SET_SUPPLY = 'SET_SUPPLY' 
const SET_COMPLECTS_TYPE = 'SET_COMPLECTS_TYPE' 


const initialState = {
    supply : INTERNET,
    compectsType: PROF
}


const globalParametrsReducer = (state = initialState, action) => {

    switch (action.type) {
        case value:
            
            break;
    
        default:
            return state;
    }
}

export default globalParametrsReducer