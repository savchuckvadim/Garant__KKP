import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";


import "./dealPrice.css";




const TableDeal = (props) => {

let unit = props.unit

    function createData(type, name, prepaid, discount, total) {
        
        let price = 0
        if (type === 'Гарант') {
            price = props.state.currentPrice
        } else {
            price =  props.state.legalTech.priceOfLt
        }
        let result = {
            'type': type,
            'name': name,
            'prepaid': prepaid,
            'discount': `${discount} р.`,
            'total': total,
            'price': price
        }
        
        return result
    
    }
    
    
    
    let rows = []
    let result
    // let actionPrice = getPriceActionCreator()

    if (props.state.currentComplect) {
        result = props.state.result.currentResult
        // props.dispatch(actionResult)
    }
    let price = props.price
    // props.dispatch(actionPrice)


    const goods = (state) => {

        if (state.currentComplect) {

            rows = [
                createData('Гарант', state.currentComplect.name, 0, 0, price)

            ]
            if (state.legalTech.nameOflt) {
                if (state.legalTech.nameOflt !== 'LT собран неверно')
                    rows.push(createData('Legal Tech', state.legalTech.nameOflt, 0, 0, state.legalTech.priceOfLt))
            }
        }
    }


    goods(props.state)


    const value = (type) => {
        if (type === 'Гарант') {

            return props.state.currentPrice.value

        } else {
            return props.state.legalTech.priceOfLt
        }

    }

    const status = (type) => {
        if (type === 'Гарант') {
            return props.state.currentPrice.status
        } else {
            return props.state.legalTech.status
        }
    }

    return (
        <TableContainer component={Paper} className={'table'}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow >
                        <TableCell>Наименование</TableCell>
                        <TableCell align="right">{unit}</TableCell>
                        {/* <TableCell align="right">Аванс&nbsp;(мес.)</TableCell> */}
                        {/* <TableCell align="right">Скидка&nbsp;(%)</TableCell> */}
                        <TableCell align="right">Сумма&nbsp;(руб.)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (

                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell component="th" scope="row" className="spanText">
                                {`${row.type} ${row.name}`}
                            </TableCell>
                            {/* <TableCell align="right">{row.total}</TableCell> */}
                            {/* <OfferPrepaid /> */}
                            {/* <OfferDiscount state={props.state} dispatch={props.dispatch} /> */}
                            <TableCell align="right">1</TableCell>

                            {/* <TableCell align="right">{row.total}</TableCell> */}
                            <TableCell align="right">
                                {row.total}
                                {/* <InputText
                                    state={props.state}
                                    dispatch={props.dispatch}
                                    type="price"
                                    autofocus={status(row.type)}
                                    value={value(row.type)}
                                    placeholder={value(row.type)}
                                    width={"70px"}
                                    typeOfProduct={row.type}
                                    typeOfAction="INPUT_CHANGE_PRICE"
                                /> */}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableDeal