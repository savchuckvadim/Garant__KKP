import { bitrixAPI } from "../../../services/bitrix-api";
import { preloader } from "../preloader-reducer";

const SET_NEW_DEAL = 'SET_NEW_DEAL'
const initialState = {
    newDeal: null
}


//AC
const setNewDeal = (deal) => ({ type: SET_NEW_DEAL, deal })
//THUNK
export const sendDeal = (dealName, ltId, goodsId, price, priceOfLt = null, unit, typeOfContractId, dealField, description) => async (dispatch) => {
    dispatch(preloader(true))
    try {
        const currentUserId = await bitrixAPI.getCurrentUserId()
        const newDealId = await bitrixAPI.addDeal(dealName, currentUserId)

        await bitrixAPI.setProducts(ltId, newDealId, goodsId, price, priceOfLt, unit)

        const companyId = await bitrixAPI.getCompanyId(dealName)
        const updatingDeal = await bitrixAPI.updateDeal(newDealId, typeOfContractId, dealField, description, companyId)
        dispatch(setNewDeal(updatingDeal))
        dispatch(preloader(false))
        // document.location.replace(`https://april-garant.bitrix24.ru/crm/deal/details/${newDealId}/`);
       
        document.location.replace(`https://april-garant.bitrix24.ru/crm/deal/details/${newDealId}/`);

    } catch (error) {
        console.log(error)
        dispatch(preloader(false))
    }

    
    
}
const dealReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_NEW_DEAL:

            return { ...state, newDeal: action.deal };

        default:
            return state;
    }
}

export default dealReducer