import {bitrixAPI} from '../../services/bitrix-api'
const initialState = {
    company: '',
    user: ''

}

export const initial = () => async (dispatch) => {
    bitrixAPI.getCurrentUserId()
    bitrixAPI.info()
}

const app = (state = initialState, action) => {
    // switch (key) {
    //     case value:

    //         break;

    //     default:
    //         break;
    // }
    return state
}

export default app