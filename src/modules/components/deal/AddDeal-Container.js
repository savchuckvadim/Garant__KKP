import {
    connect
} from "react-redux"
import { resetActionCreator } from "../../redux/redusers/currentComplect-reducer";
import { dealNameActionCreator } from "../../redux/redusers/deal/dealName-reducer";
import { dealStatusActionCreator } from "../../redux/redusers/deal/dealStatus-reducer";
import { dealFieldActionCreator } from "../../redux/redusers/deal/field-reducer";
import {
    AddDeal
} from "./AddDeal"



const mapStateToProps = (state) => {
debugger
    let currentComplect = state.currentComplect;
    let dealField = state.field.current



    // let fields = []
    // let infoblocks = []

    // let erPakets = state.encyclopedias[0].value
    // let encyclopedias = state.encyclopedias[1].value

    // let legalTech = state.legalTech.value
    let price = state.price.currentPrice.value
    let goods = state.goods.currentId
    let ltGoods = state.legalTech.currentId
    let priceOfLt = state.legalTech.priceOfLt
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
        unit: state.typeOfContract.value.units.CODE,
        typeOfClient: state.typeOfClient,
        prepaid: state.prepaid,
        priceOfComplect: price,
        goods: goods,
        ltGoods: ltGoods,
        priceOfLt: priceOfLt,
        styleOfPush,
        styleOfCancel,
        dealField,
     
        name: state.dealName.value



    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        reset: () => {
            let resetAction = resetActionCreator()
            return dispatch(resetAction)
        },

        // changeDealStatus: () => {
           
        //     let statusAction = dealStatusActionCreator();
        //     dispatch(statusAction)
        // },
        changeDealName: (value) => {
           
            let nameAction = dealNameActionCreator(value);
            dispatch(nameAction)
        }
        
    }
}


export const AddDealContainer = connect(mapStateToProps, mapDispatchToProps)(AddDeal)