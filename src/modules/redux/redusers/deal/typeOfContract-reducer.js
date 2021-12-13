let TYPE_OF_CONTRACT = 'TYPE_OF_CONTRACT';

let initialState = {

    name: 'Тип договора',
    id: 'UF_CRM_1540190343',
    value: "",
    typesOfContract: [{
            id: '1913',
            name: 'Internet'
        },
        {
            id: '1915',
            name: 'Договор услуг'
        },
        {
            id: '3616',
            name: 'Абонентский'
        },
        {
            id: '3170',
            name: 'Лицензионный'
        },

    ]

}



export const typeOfContractActionCreator = () => {

    return {
        type: TYPE_OF_CONTRACT
    }
}

const changeTypeOfContract = (stateCome, action) => {

    let state = {
        ...stateCome
    }

    return state
}

export const typeOfContractReducer = (state = initialState, action) => {

    if (action.type === TYPE_OF_CONTRACT) {
        return changeTypeOfContract()
    }
    return state
}