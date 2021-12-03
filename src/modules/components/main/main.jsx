import "./main.css"
import Complect from "../complect/complect"
import ResultContainer from "../result/resultContainer"
import BlocksOfInfoblocksContainer from "../infoblocks/blocksOfInfoblocks-Container"





const Main = (props) => {
    let styleResult = {
        color: 'white'
    }
    const result = () => {
        if (props.currentComplect && !props.modal) {
            return (
                // <div className="result__container">
                    <ResultContainer />
                // </div>
            )
        }


    }

    return (
        <div className={props.className}>

            <div className={'main'}>

                <div className={'form__complect'}>

                    <Complect />

                </div>

                <div className={'infoblocks'}>
                    <BlocksOfInfoblocksContainer />

                </div>

                {/* <div style={styleResult} className={style.result__container}>
                    <Result state={props.state} dispatch={props.dispatch} />
                </div> */}

                {result()}

            </div>

        </div>
    )
}

export default Main