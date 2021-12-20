const DEAL_STATUS = 'DEAL_STATUS'

const inittialState ={
    current: true
} 

export const dealStatusActionCreator = () => {

    return {
        type: DEAL_STATUS
    }
}

const changeDealStatus = (stateCome) => {
    debugger
    let state = {...stateCome}
    if(state){
        state.current = false
        console.log('changeDealStatus false')

       
    }else{
        state.current = true
        console.log('changeDealStatus true')

    }
    return state
}


export const dealStatusReducer = (state = inittialState, action) => {
    console.log('changeDealStatus')
    if(action.type === DEAL_STATUS){
        return changeDealStatus(state)
    }
    return state
}