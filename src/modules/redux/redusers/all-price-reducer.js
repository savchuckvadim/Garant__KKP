import { pricesAPI } from "../../services/api"
import { coefficientsAPI } from "../../services/classic-coefficients-api"

const SET_PRICES = 'SET_PRICES'
const SET_COEFFICIENTS = 'SET_COEFFICIENTS'
const initialState = {
    classics: {
        localPrices: [],
        coefficients: []
    },
    prof: {
        OD1: [],
        OD2: [],
        OD3: [],
        OD5: [],
        OD10: [],
        OD20: [],
        OD30: [],
        OD50: [],
    }
}
//AC
const setPrices = (prices) => ({ type: SET_PRICES, prices })
const setCoefficients = (coefficients) => ({ type: SET_COEFFICIENTS, coefficients })
// [5400, 5400, 7776, 7776, 6804, 6912, 10908, 13608],
// [6480, 6480, 9396, 9396, 8208, 8316, 13068, 16308],

//THUNK

export const getPrices = () => async (dispatch) => {
    const prices = await pricesAPI.getPrices()
    // await dispatch(getCoefficients())
    dispatch(setPrices(prices))
}

const getCoefficients = () => async (dispatch) => {

    const coefficients = await coefficientsAPI.getCoefficients()
    dispatch(setCoefficients(coefficients))
}

const allPriceReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PRICES:

            return state;

        case SET_COEFFICIENTS:
            return { ...state, coefficients: action.coefficients }
        default:
            return state;
    }
}

export default allPriceReducer