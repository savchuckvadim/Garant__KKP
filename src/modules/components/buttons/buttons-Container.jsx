
import Ellipse from "./img/uncheckedWhite.svg"
import EllipseCheck from "./img/checkedWhite.svg"
import "./buttons.css"
import React from 'react';
import { createComplectActionCreator } from "../../redux/redusers/currentComplect-reducer.js"
import { changeColorOfButtonActionCreator } from "../../redux/redusers/allComplects-reducer"
import { changeBlocksFromNewComplectActionCreator } from "../../redux/redusers/checkBoxes-action";
import ComplectButtons from "./buttons";
import { connect } from "react-redux";
import { goodsActionCreator } from "../../redux/redusers/deal/goods-reducer";




let mapStateToProps = (state) => {
let currentOd = state.od.currentOd
    let numberOfOD 
    state.od.names.forEach((od, index) => {
        if(od === currentOd){
            numberOfOD = index
        }
    })
    let typeOfContract = state.typeOfContract.value.typeOfGood
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
    let style = []
    state.allComplects.forEach(complect => {
        let complectColor = complect.color
        let borderColor = complect.color
        let textColor = currentTheme.color
        if (currentComplect) {
            if (complect.name === currentComplect.name) {
                complectColor = complect.color
                borderColor = currentTheme.color
                textColor = currentTheme.textColor
            } else {
                complectColor = currentTheme.backgroundColor
            }
        } else {
            complectColor = currentTheme.backgroundColor
        }
        style.push(dinamicStyleForButtons(borderColor, textColor, complectColor))

    })
    let ellipse = state.allComplects.map(complect => {
        if (currentComplect) {
            if (complect.name === currentComplect.name) {
                return EllipseCheck
            } else {
                return Ellipse
            }
        } else {
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
        ellipse: ellipse,
        
        numberOfOD,
        typeOfContract

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        createComplect: (obj, index, ods, currentOd, currentTheme,  numberOfOD, typeOfContract) => {

            let actionNewComplect = createComplectActionCreator(obj, index, ods, currentOd)
            let actionColorOfButton = changeColorOfButtonActionCreator(index, currentTheme)
            let actionBlocksFromNewComplect = changeBlocksFromNewComplectActionCreator(obj)
            let actionGoods = goodsActionCreator(index, numberOfOD, typeOfContract)
            dispatch(actionColorOfButton)
            dispatch(actionNewComplect)
            dispatch(actionBlocksFromNewComplect)
            dispatch(actionGoods)

        }
    }
}
const ComplectButtonsContainer = connect(mapStateToProps, mapDispatchToProps)(ComplectButtons)
export default ComplectButtonsContainer