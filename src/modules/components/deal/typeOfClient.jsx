import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import "./prepaid.css"
const TypeOfClient = (props) => {
    let items = []
    props.typesOfClient.forEach(type => {
       
        items.push( <MenuItem key={type} value={type}>{type}</MenuItem>)
    })
    
    return (
        <div className="prepaid__container">
            <FormControl fullWidth>
                <InputLabel id="deal-client-select-label">{props.name}</InputLabel>
                <Select
                    labelId="deal-client-select-label"
                    id="deal-client-select"
                    value={props.value}
                    label={props.name}
                    onChange={(e) => { props.changeTypeOfClient (e) }}
                >
                    {items}
                </Select>
            </FormControl>
        </div>
    )
}

export default TypeOfClient

