import { connect } from "react-redux"
import { resetActionCreator } from "../../redux/redusers/currentComplect-reducer"
import { setCompectsType, setSupply } from "../../redux/redusers/global-parameters/global-parameters-reducer"
import GlobalParameters from "./Global-Parameters"

const mapStateToProps = (state) => {
    return {
        supplyButton: state.globalParameters.supplyButton,
        currentSupply: state.globalParameters.currentSupply,
        complectsTypeButton: state.globalParameters.complectsTypeButton,
        currentComplectsType: state.globalParameters.currentComplectsType


    }
}
const GlobalParametersContainer = connect(mapStateToProps, {
    setSupply,
    setCompectsType,
    reset:resetActionCreator
})(GlobalParameters)
export default GlobalParametersContainer