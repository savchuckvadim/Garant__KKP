import { connect } from "react-redux"
import { typeOfContractActionCreator } from "../../redux/redusers/deal/typeOfContract-reducer"
import TypeOfContract from "./typeOfContract"

const mapStateToProps = (state) => {

    return {
        name: state.typeOfContract.name,
        id: state.typeOfContract.id,
        value: state.typeOfContract.value,
        typesOfContract: state.typeOfContract.typesOfContract
    }
}
const mapDispatchToProps = (dispatch) => {
    let changeTypeOfContract = (index) => {
        let action = typeOfContractActionCreator(index)
        dispatch(action)
    }
    return {
        changeTypeOfContract: changeTypeOfContract
    }
}

export const TypeOfContractContainer = connect(mapStateToProps, mapDispatchToProps)(TypeOfContract)