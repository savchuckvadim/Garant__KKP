
import Ellipse from "./img/uncheckedWhite.svg"
import EllipseCheck from "./img/checkedWhite.svg"
import "./buttons.css"
import React from 'react';
import { createComplectActionCreator } from "../../redux/redusers/currentComplect-reducer.js"
import { changeColorOfButtonActionCreator } from "../../redux/redusers/allComplects-reducer"
import { changeBlocksFromNewComplectActionCreator } from "../../redux/redusers/checkBoxes-action";
import ComplectButtons from "./buttons";
import { connect } from "react-redux";




let mapStateToProps = (state) => {
    let currentComplect = state.currentComplect
    let currentTheme = state.theme.style[state.theme.indexOfTheme]
    const dinamicStyleForButtons = (borderColor, textColor, complectColor) => {

        let styleOfButtons = {
            color: textColor,
            backgroundColor: complectColor,
            border: '1px solid',
            borderColor: borderColor,
           

        }

        return styleOfButtons
    }
    let style = state.allComplects.map(complect => {
        let complectColor = complect.color
        let borderColor = complect.color
        let textColor = currentTheme.color
        if (currentComplect) {
            if (complect.name === currentComplect.name) {
                complectColor = complect.color
                borderColor = currentTheme.color
                textColor = currentTheme.textColor
            } else {
                complectColor = 'none'
            }
        } else {
            complectColor = 'none'
        }

        return dinamicStyleForButtons(borderColor, textColor, complectColor)
    })
    let ellipse = state.allComplects.map(complect => {
        if (currentComplect) {
            if (complect.name === currentComplect.name) {
                return EllipseCheck
            } else {
                return Ellipse
            }
        }else {
            return Ellipse
        }
        
    })
    return {
        allComplects: state.allComplects,
        currentTheme: state.theme.style[state.theme.indexOfTheme],
        currentOd: state.od.currentOd,
        ods: state.od.names,
        currentTheme: currentTheme,
        style: style,
        ellipse: ellipse

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        createComplect: (obj, index, ods, currentOd, currentTheme) => {

            let actionNewComplect = createComplectActionCreator(obj, index, ods, currentOd)
            let actionColorOfButton = changeColorOfButtonActionCreator(index, currentTheme)
            let actionBlocksFromNewComplect = changeBlocksFromNewComplectActionCreator(obj)
            dispatch(actionColorOfButton)
            dispatch(actionNewComplect)
            dispatch(actionBlocksFromNewComplect)

        }
    }
}
const ComplectButtonsContainer = connect(mapStateToProps, mapDispatchToProps)(ComplectButtons)
export default ComplectButtonsContainer