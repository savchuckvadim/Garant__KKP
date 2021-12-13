import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import "./prepaid.css"
const TypeOfContract = (props) => {
    let items = []
    
    props.typesOfContract.forEach((type, index) => {
       
        items.push( <MenuItem onClick={(e) => { props.changeTypeOfContract (index) }} key={type.id} value={type.name}>{type.name}</MenuItem>)
    })
    let ref = React.createRef()

    return (
        <div className="prepaid__container">
            <FormControl fullWidth>
                <InputLabel id="deal-contract-select-label">{props.name}</InputLabel>
                <Select
                    labelId="deal-contract-select-label"
                    id="deal-contract-select"
                    value={props.value.name}
                    label={props.name}
                    ref={ref}
                    // onChange={(e) => { props.changeTypeOfContract (e) }}
                >
                    {items}
                </Select>
            </FormControl>
        </div>
    )
}

export default TypeOfContract

