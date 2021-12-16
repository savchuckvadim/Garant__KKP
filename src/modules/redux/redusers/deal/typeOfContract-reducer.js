let TYPE_OF_CONTRACT = 'TYPE_OF_CONTRACT';

let initialState = {

    name: 'Тип договора',
    id: 'UF_CRM_1540190343',
    value: {
        id: '1913',
        name: 'Internet',
        typeOfGood: 'prof'
    },
    typesOfContract: [{
            id: '1913',
            name: 'Internet',
            typeOfGood: 'prof',
           
            
        },
        // {
        //     id: '1915',
        //     name: 'Договор услуг',
        //     typeOfGood: 'prof'
        // },
        {
            id: '3616',
            name: 'Абонентский полгода',
            typeOfGood: 'abonSix'
        },
        {
            id: '3616',
            name: 'Абонентский год',
            typeOfGood: 'abonEleven'
        },
        // {
        //     id: '3170',
        //     name: 'Лицензионный',
        //     typeOfGood: 'prof'
        // },

    ]

}



export const typeOfContractActionCreator = (index) => {

    return {
        type: TYPE_OF_CONTRACT,
        index: index
    }
}

const changeTypeOfContract = (stateCome, action) => {

    let state = {
        ...stateCome
    }
    state.value = state.typesOfContract[action.index]
console.log(state.value.typeOfGood)
    return state
}

export const typeOfContractReducer = (state = initialState, action) => {

    if (action.type === TYPE_OF_CONTRACT) {
        return changeTypeOfContract(state, action)
    }
    return state
}