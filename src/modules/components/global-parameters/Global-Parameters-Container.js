import { connect } from "react-redux"
import { setSupply } from "../../redux/redusers/global-parameters/global-parameters-reducer"
import GlobalParameters from "./Global-Parameters"

const mapStateToProps = (state) => {
    return {
        supply: state.globalParameters.supply,
        compectsType: state.globalParameters.compectsType
    }
}
const GlobalParametersContainer = connect(mapStateToProps, {
    setSupply
})(GlobalParameters)
export default GlobalParametersContainer