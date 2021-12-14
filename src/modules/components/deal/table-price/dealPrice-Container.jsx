import { connect } from "react-redux"
import TableDeal from "./dealPrice"



const mapStateToProps = (state) => {
    let price = state.price.currentPrice.value;

    return {
        state: state,
        price: price
    }
}
const mapDispaychToProps = (dispatch) => {


    return {

    }
}

export const TableDealContainer = connect(mapStateToProps, mapDispaychToProps)(TableDeal)

