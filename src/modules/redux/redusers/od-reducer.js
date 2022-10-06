const CHANGE_CURRENT_OD = 'CHANGE_CURRENT_OD';




let initialState = {

    currentOd: '1 Одновременный доступ',
    names: [
        '1 Одновременный доступ',
        '2 Одновременных доступа',
        '3 Одновременных доступа',
        '5 Одновременных доступов',
        '10 Одновременных доступов',
        '20 Одновременных доступов',
        '30 Одновременных доступов',
        '50 Одновременных доступов',
    ],
    internetNames: [
        '1 Одновременный доступ',
        '2 Одновременных доступа',
        '3 Одновременных доступа',
        '5 Одновременных доступов',
        '10 Одновременных доступов',
        '20 Одновременных доступов',
        '30 Одновременных доступов',
        '50 Одновременных доступов',
    ],
    proximaNames: [
        'Флэш Проксима',
        '1 ОД Проксима',
        '2 ОД Проксима',
        '3 ОД Проксима',
        '5 ОД Проксима',
        '10 ОД Проксима',
        '20 ОД Проксима',
        '30 ОД Проксима',
        '50 ОД Проксима',
    ],


}




export const odChangeActionCreator = (name, names, currentComplect) => {

    return {
        type: CHANGE_CURRENT_OD,
        name: name,
        currentComplect: currentComplect,
        ods: names

    }
}


export const oD = (state = initialState, action) => {
    let stateCopy = {
        ...state
    }
    stateCopy.currentOd = state.currentOd
    if (action.type === 'CHANGE_CURRENT_OD') {
        if (!action.currentComplect) {
            window.alert('сначала выберите комплект')
        } else {
            
            stateCopy.currentOd = action.name;
            // state.currentComplect.od = state.currentOd;

        }
    }
   
    return stateCopy


}