import { UNIVERSAL } from '../../redux/redusers/global-parameters/global-parameters-reducer'
import './Global-Parameters.css'

const GlobalParameters = (props) => {
    const changeSupply = () => {
        if (props.supplyButton === 'Проксима') {
            props.reset()
            props.setSupply(0)
        } else {
            props.reset()
            props.setSupply(1)
        }

    }
    const changeComplectsType = () => {
        if (props.complectsTypeButton === UNIVERSAL) {
            props.reset()
            props.setCompectsType(0)
        } else {
            props.reset()
            props.setCompectsType(1)
        }
    }
    return (
        <div className="app__header">
            <p className="complect__title" id="complect__title">Выберите подходящий {props.currentComplectsType} комплект <span className='current__supply'> "Гарант - {props.currentSupply}"</span></p>
            <div className="global__parametrs">
                <p className="global__parametr"
                    onClick={changeComplectsType}
                >{props.complectsTypeButton}</p>
                <p className="global__parametr"
                    onClick={changeSupply}>{props.supplyButton}</p>
            </div>
        </div>
    )
}

export default GlobalParameters