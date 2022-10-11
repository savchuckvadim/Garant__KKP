import { connect } from "react-redux"
import App from "./App"
import { getPrices } from "./modules/redux/redusers/all-price-reducer"


const mapStateToProps = (state) => {
    return {
        preloader: state.preloader.inProgress,
        regionInProgress: state.globalParameters.regionInProgress
    }
}

export default connect(mapStateToProps, {
    getPrices
})(App)