
import "./buttons.css"
import * as React from 'react';
import { odChangeActionCreator } from "../../redux/redusers/od-reducer";
import ODButtons from "./od";
import { connect } from "react-redux";

//



let mapStateToProps = (state) => {
  let currentComplect = state.currentComplect
  let allOds = state.od.names
  let currentTheme = state.theme.style[state.theme.indexOfTheme]
  let odClassName = currentTheme.currentMainClass
  let currentOd = state.od.currentOd
  const style = {
    height: 54,
    backgroundColor: currentTheme.backgroundColor,
    color: currentTheme.color


  }


  return {
    currentComplect,
    allOds,
    odClassName,
    currentOd,
    style

  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    odChange : (name, names, currentComplect) => { 
      const action = odChangeActionCreator(name, names, currentComplect)
      
      dispatch(action)
    }
  }
}
const ODButtonsContainer = connect(mapStateToProps, mapDispatchToProps)(ODButtons)
export default ODButtonsContainer