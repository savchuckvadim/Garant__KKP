let GOODS = 'GOODS';

let initialState = {
    //Бух БухГос ГлавБух ГлавБухГос ЮРИСТ оФИС 
    prof: [
        [6394, 6396, 6402, 6404, 6398, 6400, 6406, 6408],//1OD
        [6410, 6412, 6418, 6420, 6414, 6416, 6422, 6424],//20D
        [6426, 6428, 6434, 6436, 6430, 6432, 6438, 6440],
        [6442, 6444, 6450, 6452, 6446, 6448, 6454, 6456],
        [6458, 6460, 6466, 6468, 6462, 6464, 6470, 6472],
        [6474, 6476, 6482, 6484, 6478, 6480, 6486, 6488],
        [6490, 6492, 6498, 6500, 6494, 6496, 6502, 6504],
        [6506, 6508, 6514, 6516, 6510, 6512, 6518, 6520]
    ],

    abonSix: [
        [6522, 6524, 6530, 6532, 6526, 6528, 6534, 6536],
        [6538, 6540, 6546, 6548, 6542, 6544, 6550, 6552],
        [6554, 6556, 6562, 6564, 6558, 6560, 6566, 6568],
        [6570, 6572, 6578, 6580, 6574, 6576, 6582, 6584],
        [6586, 6588, 6594, 6596, 6590, 6592, 6598, 6600],
        [6602, 6604, 6610, 6612, 6606, 6608, 6614, 6616],
        [6618, 6620, 6626, 6628, 6622, 6624, 6630, 6632],
        [6634, 6636, 6642, 6644, 6638, 6640, 6646, 6648],

    ],

    abonEleven: [
        [6650, 6652, 6658, 6660, 6654, 6656, 6662, 6664],
        [6666, 6668, 6674, 6676, 6670, 6672, 6678, 6680],
        [6682, 6684, 6690, 6692, 6686, 6688, 6694, 6696],
        [6698, 6700, 6706, 6708, 6702, 6704, 6710, 6712],
        [6714, 6716, 6722, 6724, 6718, 6720, 6726, 6728],
        [6730, 6732, 6738, 6740, 6734, 6736, 6742, 6744],
        [6746, 6748, 6754, 6756, 6750, 6752, 6758, 6760],
        [6762, 6764, 6770, 6772, 6766, 6768, 6774, 6776],


    ],
    proximaProf: [
        [7426, 7428, 7434, 7436, 7430, 7432, 7438, 7440], //flash
        [7442, 7566, 7446, 7448, 7570, 7444, 7450, 7452], //1OD
        [7454, 7456, 7462, 7464, 7458, 7460, 7466, 7468], //2OD
        [7470, 7472, 7478, 7480, 7474, 7476, 7482, 7484], //3OD
        [7486, 7488, 7494, 7496, 7490, 7492, 7498, 7500], //5OD
        [7502, 7504, 7510, 7512, 7506, 7508, 7514, 7516], //10 OD
        [7518, 7520, 7526, 7528, 7522, 7524, 7530, 7532], //20 OD
        [7534, 7536, 7542, 7544, 7538, 7540, 7546, 7548], //30 OD
        [7550, 7552, 7558, 7560, 7554, 7556, 7562, 7564], //50 OD

    ],

    currentId: 6394

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

    if (typeOfContract === 'abonSix') {
        state.currentId = state.abonSix[numberOfOD][numberOfComplect]
    } else if (typeOfContract === 'abonEleven') {
        state.currentId = state.abonEleven[numberOfOD][numberOfComplect]
    } else {
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