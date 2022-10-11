import { connect } from "react-redux"
import App from "./App"
import { getPrices } from "./modules/redux/redusers/all-price-reducer"
import { preloader } from "./modules/redux/redusers/preloader-reducer"

const mapStateToProps = (state) => {
    return{
        preloader:state.preloader.inProgress
    }
}

export default connect(mapStateToProps, {
    getPrices
})(App)