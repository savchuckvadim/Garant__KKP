import {
    connect
} from "react-redux"
import { resetActionCreator } from "../../redux/redusers/currentComplect-reducer";
import {
    AddDeal
} from "./AddDeal"



const mapStateToProps = (state) => {

    let currentComplect = state.currentComplect;

    // let fields = []
    // let infoblocks = []

    // let erPakets = state.encyclopedias[0].value
    // let encyclopedias = state.encyclopedias[1].value

    // let legalTech = state.legalTech.value
    let price = state.price.currentPrice.value
    let goods = state.goods.currentId
    let backgroundColor = state.allComplects[state.currentComplect.number].color
    let color = state.allComplects[state.currentComplect.number].backgroundColor

    let styleOfPush = {
        backgroundColor: backgroundColor,
        color: color,

    }
    let styleOfCancel = {
        backgroundColor: 'red',
        color: 'white',

    }
   

    return {
        typeOfContract: state.typeOfContract,
        typeOfClient: state.typeOfClient,
        prepaid: state.prepaid,
        priceOfComplect: price,
        goods: goods,
        styleOfPush,
        styleOfCancel



    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        reset: () => {
            let resetAction = resetActionCreator()
            return dispatch(resetAction)
        }
        
    }
}


export const AddDealContainer = connect(mapStateToProps, mapDispatchToProps)(AddDeal)