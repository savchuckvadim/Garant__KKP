import "./complect.css"
import ComplectButtonsContainer from "../buttons/buttons-Container";
import ODButtonsContainer from "../buttons/od-Container";
import ResetButtonContainer from "../buttons/reset-Container";
import ModalContainer from "../buttons/modal/modal-Container";
import GlobalParameters from "../global-parameters/Global-Parameters";





const Complect = () => {
    let styleComplect = {

    }
    return (

        <form style={styleComplect} id="" className="form">
           
            <GlobalParameters />

            <div className={'container'}>

                <ComplectButtonsContainer />
                <ODButtonsContainer />
                <ResetButtonContainer />
                {/* <ModalButton state={props.state} dispatch={props.dispatch} /> */}
            </div>

            <div className={'container__modal'}>
                <ModalContainer />
            </div>
        </form>
    )
}

export default Complect