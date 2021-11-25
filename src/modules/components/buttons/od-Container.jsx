
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
  let odClassName = currentTheme.classOfOd
  let currentOd = state.od.currentOd
  const style = {
    height: 54,
    // textColor: props.state.theme[props.state.indexOfTheme].textolor ,
    // color: props.state.theme[props.state.indexOfTheme].color,
    // backgroundColor: props.state.theme[props.state.indexOfTheme].backgroundColor,
    border: '0.5px ',
    borderStyle: 'solid',
    borderColor: currentTheme.color,
    borderRadius: '3%',

    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    transitionProperty: 'background-color, transform, color',
    transitionDuration: '0.5s',
    transitionDelay: '0.3s'

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
    odChange : (name, currentComplect) => { 
      const action = odChangeActionCreator(name, currentComplect)
      dispatch(action)
    }
  }
}
const ODButtonsContainer = connect(mapStateToProps, mapDispatchToProps)(ODButtons)
export default ODButtonsContainer