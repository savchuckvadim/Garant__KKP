import { connect } from "react-redux"
import { createComplectActionCreator, resetActionCreator } from "../../redux/redusers/currentComplect-reducer"
import { setCompectsType, setSupply } from "../../redux/redusers/global-parameters/global-parameters-reducer"
import GlobalParameters from "./Global-Parameters"

const mapStateToProps = (state) => {
    return {
        supplyButton: state.globalParameters.supplyButton,
        currentSupply: state.globalParameters.currentSupply,
        complectsTypeButton: state.globalParameters.complectsTypeButton,
        currentComplectsType: state.globalParameters.currentComplectsType,
        universalComplectObj:state.universalComplects.universalComplectObj,
        od:state.od
    }
}
const GlobalParametersContainer = connect(mapStateToProps, {
    setSupply,
    setCompectsType,
    reset:resetActionCreator,
    createComplect:createComplectActionCreator
})(GlobalParameters)
export default GlobalParametersContainer