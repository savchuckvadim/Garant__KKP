import "./complect.css"
import ComplectButtonsContainer from "../buttons/buttons-Container";
import ODButtonsContainer from "../buttons/od-Container";
import ResetButtonContainer from "../buttons/reset-Container";







const Complect = () => {
    let styleComplect = {

    }
    return (

        <form style={styleComplect} id="" className="form">
            <p className="complect__title" id="complect__title">Выберите подходящий комплект "Гарант"</p>
            <div className={'container'}>

                <ComplectButtonsContainer />
                <ODButtonsContainer />
                <ResetButtonContainer /> 
                 {/* <ModalButton state={props.state} dispatch={props.dispatch} /> */}
            </div>
        </form>
    )
}

export default Complect