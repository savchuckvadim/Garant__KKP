let GOODS = 'GOODS';

let initialState = {

    prof: [
        [5562, 5564, 5566, 5568, 5570, 5572, 5574, 5576],
        [5578, 5580, 5582, 5584, 5586, 5588, 5590, 5592],
        [5594, 5596, 5598, 5600, 5602, 5604, 5606, 5608],
        [5610, 5612, 5614, 5616, 5618, 5620, 5622, 5624],
        [5626, 5628, 5630, 5632, 5634, 5636, 5638, 5640],
        [5644, 5644, 5646, 5648, 5650, 5652, 5654, 5656],
        [5658, 5660, 5662, 5664, 5666, 5668, 5670, 5672],
        [5674, 5676, 5678, 5680, 5682, 5684, 5686, 5688]
    ],

    abonSix: [
        [5946, 5948, 5950, 5952, 5954, 5956, 5958, 5960],
        [5962, 5964, 5966, 5968, 5970, 5972, 5974, 5976],
        [5978, 5980, 5982, 5984, 5986, 5988, 5990, 5992],
        [5994, 5996, 5998, 6000, 6002, 6004, 6006, 6008],
        [6010, 6012, 6014, 6016, 6018, 6020, 6022, 6024],
        [6026, 6028, 6030, 6032, 6034, 6036, 6038, 6040],
        [6042, 6044, 6046, 6048, 6050, 6052, 6054, 6056],
        [6058, 6060, 6062, 6064, 6066, 6068, 6070, 6072],

    ],

    abonEleven: [
        [6074, 6076, 6078, 6080, 6082, 6084, 6086, 6088],
        [6090, 6092, 6094, 6096, 6098, 6100, 6102, 6104],
        [6106, 6108, 6110, 6112, 6114, 6116, 6118, 6120],
        [6122, 6124, 6126, 6128, 6130, 6132, 6134, 6136],
        [6138, 6140, 6142, 6144, 6146, 6148, 6150, 6152],
        [6154, 6156, 6158, 6160, 6162, 6164, 6166, 6168],
        [6170, 6172, 6174, 6176, 6178, 6180, 6182, 6184],
        [6186, 6188, 6190, 6192, 6194, 6196, 6198, 6200],

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
 
    return state
}

export const goodsReducer = (state = initialState, action) => {

    if (action.type === GOODS) {
        return changeGoods(state, action)
    }
    return state
}