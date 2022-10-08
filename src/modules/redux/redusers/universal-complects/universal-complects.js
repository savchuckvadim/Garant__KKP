const SET_CURRENT_UNIVERSAL_COMPLECT = 'SET_CURRENT_UNIVERSAL_COMPLECT'

const initialState = {
    currentComplect: null,
    complects: [
        {
            name: 'Классик',
            weight: 1,
            'className' : 'btn__accountant',
        },
        {
            name: 'Классик+',
            weight: 1.5,
            'className' : 'btn__accountant',
        },
        {
            name: 'Универсал',
            weight: 2,
            'className' : 'btn__accountant',
        },
        {
            name: 'Универсал+',
            weight: 3,
            className : 'btn__accountant',
        },
        {
            name: 'Профессионал',
            weight: 4,
            className : 'btn__accountant',
        },
        {
            name: 'Мастер',
            weight: 6,
            className : 'btn__accountant',
        },
        {
            name: 'Аналитик',
            weight: 9,
            className : 'btn__accountant',
        },
        {
            name: 'Аналитик+',
            weight: 12,
            className : 'btn__accountant',
        },
        {
            name: 'Максимум',
            weight: 24,
            className : 'btn__accountant',
        },

    ]
}
//AC
export const setCurrentUniversalComplect = (currentComplectIndex) => ({ type: SET_CURRENT_UNIVERSAL_COMPLECT, currentComplectIndex })

//REDUCER

const universalComplects = (state = initialState, action) => {

    switch (action.type) {
        case SET_CURRENT_UNIVERSAL_COMPLECT:

            return { ...state, currentComplect: state.complects[action.currentComplectIndex] };

        default:
            return state;
    }
}

export default universalComplects
