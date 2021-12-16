let GOODS = 'GOODS';

let initialState = {
//Бух БухГос Глав Бух ГлавБухГос ЮРИСТ оФИС 
    prof: [
        [5562, 5564,  5570, 5572, 5566, 5568, 5574, 5576],
        [5578, 5580,  5586, 5588, 5582, 5584, 5590, 5592],
        [5594, 5596,  5602, 5604, 5598, 5600, 5606, 5608],
        [5610, 5612,  5618, 5620, 5614, 5616, 5622, 5624],
        [5626, 5628,  5634, 5636, 5630, 5632, 5638, 5640],
        [5644, 5644,  5650, 5652, 5646, 5648, 5654, 5656],
        [5658, 5660,  5666, 5668, 5662, 5664, 5670, 5672],
        [5674, 5676,  5682, 5684, 5678, 5680, 5686, 5688]
    ],

    abonSix: [
        [5946, 5948,  5954, 5956, 5950, 5952, 5958, 5960],
        [5962, 5964,  5970, 5972, 5966, 5968, 5974, 5976],
        [5978, 5980,  5986, 5988, 5982, 5984, 5990, 5992],
        [5994, 5996,  6002, 6004, 5998, 6000, 6006, 6008],
        [6010, 6012,  6018, 6020, 6014, 6016, 6022, 6024],
        [6026, 6028,  6034, 6036, 6030, 6032, 6038, 6040],
        [6042, 6044,  6050, 6052, 6046, 6048, 6054, 6056],
        [6058, 6060,  6066, 6068, 6062, 6064, 6070, 6072],
 
    ],

    abonEleven: [
        [6074, 6076,  6082, 6084, 6078, 6080, 6086, 6088],
        [6090, 6092,  6098, 6100, 6094, 6096, 6102, 6104],
        [6106, 6108,  6114, 6116, 6110, 6112, 6118, 6120],
        [6122, 6124,  6130, 6132, 6126, 6128, 6134, 6136],
        [6138, 6140,  6146, 6148, 6142, 6144, 6150, 6152],
        [6154, 6156,  6162, 6164, 6158, 6160, 6166, 6168],
        [6170, 6172,  6178, 6180, 6174, 6176, 6182, 6184],
        [6186, 6188,  6194, 6196, 6190, 6192, 6198, 6200],

    ],

    currentId: 5576

}



export const goodsActionCreator = (numberOfComplect, numberOfOD, typeOfContract) => {

    return {
        type: GOODS,
        numberOfComplect,
        numberOfOD,
        typeOfContract
    }
}

const changeGoods = (stateCome, action) => {
    let numberOfComplect = action.numberOfComplect
    let numberOfOD = action.numberOfOD
    let typeOfContract = action.typeOfContract

    let state = {
        ...stateCome
    }
    
    if(typeOfContract === 'abonSix'){
        state.currentId = state.abonSix[numberOfOD][numberOfComplect]
    }else if(typeOfContract === 'abonEleven'){
        state.currentId = state.abonEleven[numberOfOD][numberOfComplect]
    }else{
        state.currentId = state.prof[numberOfOD][numberOfComplect]

    }
 console.log(`goodsReducer ${state.currentId}`)
    return state
}

export const goodsReducer = (state = initialState, action) => {

    if (action.type === GOODS) {
        return changeGoods(state, action)
    }
    return state
}