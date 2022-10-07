import { connect } from "react-redux"
import { resetActionCreator } from "../../redux/redusers/currentComplect-reducer"
import { setSupply } from "../../redux/redusers/global-parameters/global-parameters-reducer"
import GlobalParameters from "./Global-Parameters"

const mapStateToProps = (state) => {
    return {
        supplyButton: state.globalParameters.supplyButton,
        compectsType: state.globalParameters.compectsType
    }
}
const GlobalParametersContainer = connect(mapStateToProps, {
    setSupply,
    reset:resetActionCreator
})(GlobalParameters)
export default GlobalParametersContainer