import { connect } from "react-redux"
import App from "./App"
import { getPrices } from "./modules/redux/redusers/all-price-reducer"

const mapStateToProps = (state) => {
    return{}
}

export default connect(mapStateToProps, {
    getPrices
})(App)