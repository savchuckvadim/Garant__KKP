
const MODAL = 'MODAL';

let initialState = {
    show: false
}

export const modalActionCreator = (show) => {

    return {
        type: MODAL,
        show: show
    }
}

const changeShow = (state, show) => {
    let newState = {
        show: show
    }
    state = newState
    return state 
}

export const modal = (state = initialState, action) => {
   
    if(action.type === MODAL){  
        
        
        return changeShow(state, action.show)
        
    }
    return state 
}