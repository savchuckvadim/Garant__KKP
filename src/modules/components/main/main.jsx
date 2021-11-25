import style from "./main.module.css"
import Complect from "../complect/complect"
// import ResultContainer from "../result/resultContainer"
// import BlocksOfInfoblocksContainer from "../infoblocks/blocksOfInfoblocks-Container"





const Main = (props) => {
    
//    let state = props.store.getState()

    // const result = () => {
    //     if(state.currentComplect){
    //         return (
    //             <div style={styleResult} className={style.result__container}>
    //                 <ResultContainer />
    //             </div>
    //         )
    //     }
    // }


    let styleResult = {
        color: props.style.color
    }

    return (
        <div className={props.className}>

            <div className={style.main}>

                <div className={style.form__complect}>

                    <Complect />

                </div>

                <div className={style.infoblocks}>
                {/* <BlocksOfInfoblocksContainer /> */}

                </div>

                {/* <div style={styleResult} className={style.result__container}>
                    <Result state={props.state} dispatch={props.dispatch} />
                </div> */}

                {/* {result()} */}

            </div>

        </div>
    )
}

export default Main