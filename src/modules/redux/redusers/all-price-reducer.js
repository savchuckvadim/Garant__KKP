import { pricesAPI } from "../../services/api"

const SET_PRICES = 'SET_PRICES'



const initialState = {
    classics: {
        localPrices: [],

    },
    internetProf: [],
    proximaProf: [],
    kmv: [],
    stv: [],
    coefficients: []
}
//AC
const setPrices = (prices) => ({ type: SET_PRICES, prices })
// [5400, 5400, 7776, 7776, 6804, 6912, 10908, 13608],
// [6480, 6480, 9396, 9396, 8208, 8316, 13068, 16308],

//THUNK

export const getPrices = () => async (dispatch) => {
    const prices = await pricesAPI.getPrices()
    // await dispatch(getCoefficients())
    dispatch(setPrices(prices))
}



const allPriceReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PRICES:

            return {
                ...state, 
                internetProf: action.prices.internetProf,
                proximaProf:  action.prices.proximaProf,
                coefficients: action.prices.coefficients,
                kmv: action.prices.kmv,
                stv: action.prices.stv,
            };


        default:
            return state;
    }
}

export default allPriceReducer