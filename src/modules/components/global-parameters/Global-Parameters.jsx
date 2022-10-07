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
    return (
        <div className="app__header">
            <h4 className="complect__title" id="complect__title">Выберите подходящий комплект "Гарант - {props.currentSupply}"</h4>
            <div className="global__parametrs">
                <p className="global__parametr">Универсальная линейка</p>
                <p className="global__parametr"
                    onClick={changeSupply}>{props.supplyButton}</p>
            </div>
        </div>
    )
}

export default GlobalParameters