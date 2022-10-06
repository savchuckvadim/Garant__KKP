import './Global-Parameters.css'

const GlobalParameters = (props) => {
    const changeSupply = () => {
        if (props.supply === 'Проксима') {
            props.setSupply(0)
        } else {
            props.setSupply(1)
        }


    }
    return (
        <div className="app__header">
            <p className="complect__title" id="complect__title">Выберите подходящий комплект "Гарант"</p>
            <div className="global__parametrs">
                <p className="global__parametr">Универсальная линейка</p>
                <p className="global__parametr"
                    onClick={changeSupply}>{props.supply}</p>
            </div>
        </div>
    )
}

export default GlobalParameters