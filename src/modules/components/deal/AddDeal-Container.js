import { connect } from "react-redux"
import { AddDeal } from "./AddDeal"



const mapStateToProps = (state) => {
  
let currentComplect  = state.currentComplect;

// let fields = []
// let infoblocks = []

// let erPakets = state.encyclopedias[0].value
// let encyclopedias = state.encyclopedias[1].value

// let legalTech = state.legalTech.value
let price = state.price.currentPrice.value



    return{
        typeOfContract:  state.typeOfContract,
        typeOfClient:  state.typeOfClient,
        prepaid:  state.prepaid,
        priceOfComplect: price,
       


    }
}
const mapDispatchToProps = (dispatch) => {

    return{

    }
}


export const AddDealContainer = connect(mapStateToProps, mapDispatchToProps)(AddDeal)

