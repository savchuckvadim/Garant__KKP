import { connect } from "react-redux";
import ModalButton from "./modal";


const mapStateToProps = (state) => {
    //styleTheme
    //styleBtnModal
    //currentColor
    //currentComplect
    //currentTheme
    let currentComplect = state.currentComplect
    let currentTheme = state.theme.style[state.theme.indexOfTheme]
    let styleTheme = {
        color: currentTheme.color,
        backgrondColor: currentTheme.backgrondColor
    }
    const currentColor = () => {
        let color = currentTheme.backgroundColor
        if (currentComplect) {
            state.allComplects.forEach(element => {
                if (element.name === currentComplect.name) {
                    color = element.color
                }
            })
        }
        return color
    }
    const styleBtnModal = {
        backgroundColor: currentColor(),
        color: currentTheme.color,
        border: '1px solid',
        borderColor: currentTheme.color,

    }
    let title = currentComplect ? currentComplect.name : 'Выберите комплект'
    return {
        currentComplect,
        styleTheme,
        styleBtnModal,
        title,


    }
}
const mapDispatchToProps = (dispatch) => {
    //onclick handleShow
    //onHide={handleClose}
}

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(ModalButton)