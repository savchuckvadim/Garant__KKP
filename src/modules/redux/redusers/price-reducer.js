const GET_PRICE = 'GET_PRICE';
const INPUT_CHANGE_PRICE = 'INPUT_CHANGE_PRICE'
const CREATE_COMPLECT = 'CREATE_COMPLECT'
const CHANGE_CURRENT_OD = 'CHANGE_CURRENT_OD'
const RESET = 'RESET'

let GOODS = 'GOODS';
let initialState = {

    currentPrice: {
        value: 0,
        status: false,
        width: 0

    },

    // prices: [
    //     [4740, 4740, 6780, 6780, 5940, 6150, 9510, 12000],
    //     [5700, 5700, 8160, 8160, 7140, 7380, 11400, 14400],
    //     [7590, 7590, 10860, 10860, 9510, 9840, 15210, 19200],
    //     [11400, 11400, 16290, 16290, 14220, 14760, 22800, 28800],
    //     [15210, 15210, 21720, 21720, 18960, 19680, 30390, 38400],
    //     [18960, 18960, 27120, 27120, 23760, 24600, 38010, 48000],
    //     [22740, 22740, 32550, 32550, 28500, 29520, 45630, 57600],
    //     [26520, 26520, 37980, 37980, 33270, 34440, 53220, 67200]
    // ],

    pricesOld: [
        [5000,	6000,	8100,	12100,	16200,	20200,	24300,	28300],  //бух
        [5000,	6000,	8100,	12100,	16200,	20200,	24300,	28300],  //бух гос
        [7200,	8700,	11600,	17400,	23200,	29000,	34800,	40600],  //гл бух
        [7200,	8700,	11600,	17400,	23200,	29000,	34800,	40600],  //гл бух гос
        [6300,	7600,	10100,	15200,	20200,	25400,	30400,	35500],  //юрист
        [6400,	7700,	10300,	15400,	20600,	25800,	30900,	36100],  //офис
        [10100,	12100,	16200,	24300,	32500,	40600,	48800,	56900],  //пр
        [12600,	15100,	20100,	30200,	40300,	50400,	60400,	70500]   // пр pro
    ],
    prices: [
        [5000, 5000, 7200, 7200, 6300, 6400, 10100, 12600],
        [6000, 6000, 8700, 8700, 7600, 7700, 12100, 15100],
        [8100, 8100, 11600, 11600, 10100, 10300, 16200, 20100],
        [12100, 12100, 17400, 17400, 15200, 15400, 24300, 30200],
        [16200, 16200, 23200, 23200, 20200, 20600, 32500, 40300],
        [20200, 20200, 29000, 29000, 25400, 25800, 40600, 50400],
        [24300, 24300, 34800, 34800, 30400, 30900, 48800, 60400],
        [28300, 28300, 40600, 40600, 35500, 36100, 56900, 70500]
    ]

   

}


export const getPriceActionCreator = () => {

    return {
        type: GET_PRICE
    }
}
const changeCurrentPrice = (state, action) => {

    if (action.type === 'INPUT_CHANGE_PRICE') {

        if (action.typeOfProduct === 'Гарант') {
            state.currentPrice.width = action.width
            state.currentPrice.value = action.value
            state.currentPrice.status = action.status

        }
    }

    return state
}
const price = (stateCome, action) => {
    let state = {...stateCome}
    let currentPrice = {...stateCome.currentPrice}
    state.currentPrice = currentPrice
    return getPrice (state, action)
}
const getPrice = (state, action) => {


    // let prices = state.prices
    // let ind1
    // let ind2 = 0
    // let currentOd = ""
    // let ods = action.ods
    // if(action.currentComplect){

    //     if (action.type === CREATE_COMPLECT) {
    //         ind1 = action.obj.number
    //         currentOd = action.currentOd
    //     } else if (action.type === CHANGE_CURRENT_OD) {
            
    //         ind1 = action.currentComplect.number
    //         currentOd = action.name
            
    //     }
        
    //     ods.forEach((element, index) => {
    //         let el = element
    //         let el2 = currentOd
    //         if (el === el2) {
    //             ind2 = index
    //         }
    //     })
    
    //     if (!ind2) {
    //         state.currentPrice.value = prices[0][ind1]
    
    //     } else {
    //         state.currentPrice.value = prices[ind2][ind1]
    //     }
    // }
    let numberOfComplect = action.numberOfComplect
    let numberOfOD = action.numberOfOD
    let typeOfContract = action.typeOfContract

  
    
    if(typeOfContract === 'abonSix'){
        state.currentPrice.value = state.prices[numberOfOD][numberOfComplect]*6*0.9
    }else if(typeOfContract === 'abonEleven'){
        state.currentPrice.value = state.prices[numberOfOD][numberOfComplect]*12*0.8
    }else{
        state.currentPrice.value = state.prices[numberOfOD][numberOfComplect]

    }


    
    return state
}
// const reset = (state) => {
//     state.currentPrice.width = 0
//     return state
// }

export const priceReducer = (state = initialState, action) => {

    if (action.type === GOODS) {

        return price(state, action)
    } 
        return state
    
}