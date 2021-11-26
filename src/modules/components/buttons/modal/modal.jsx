
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import "../buttons.css"
import styleModal from "./modal.module.css"
import headerStyle from "../../header/header.module.css"
import logo from '../../header/img/logo-icon-solid-horizontal.svg'

import "../../complect/complect.css"
import ComplectButtonsContainer from '../buttons-Container'
import ODButtonsContainer from '../od-Container'
import ResetButtonContainer from '../reset-Container'








const ModalButton = (props) => {


  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);


  return (
    <>
      <Button style={props.styleBtnModal} variant="otline" onClick={props.handleShow} className={'btn__modal'}>
        {props.title}

      </Button>

      <Modal
        show={props.show}
        onHide={props.handleClose}
        size="lg"


      >
        {/* <Modal.Header closeButton style={props.styleTheme}>
          <div className={headerStyle.header__container}>
            <img className={headerStyle.header__logo} src={logo} alt="logo"></img>

          </div>
        </Modal.Header> */}
        <Modal.Body className={styleModal.body} style={props.styleTheme}>

          {/* < ComplectModalButtons state={props.state} dispatch={props.dispatch}/>

          < ODModalButtons state={props.state} dispatch={props.dispatch}/>

          <ResetButton state={props.state} dispatch={props.dispatch} /> */}
          <div className={'container__small'}>

            <ComplectButtonsContainer />
            <ODButtonsContainer />
            <ResetButtonContainer />
          </div>

        </Modal.Body>
        <Modal.Footer style={props.styleTheme}>
          <Button variant="secondary" onClick={props.handleClose}>
            Закрыть
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Сохранить
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalButton

