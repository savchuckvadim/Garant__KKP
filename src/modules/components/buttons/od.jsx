
import "./buttons.css"
import * as React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button, InputLabel, MenuItem, ThemeProvider } from "@material-ui/core";
import "../../../App.css"
import { theme } from "../../../styles/theme";
import { useTheme } from "@material-ui/styles";



const ODButtons = (props) => {
const theme = useTheme()
  let ods = []

  props.allOds.forEach((name, index) => {

    ods[index] = <MenuItem key={`item-od-${index}`} ><Button key={`btn-od-${index}`} style={props.style} onClick={() => { props.odChange(name, props.currentComplect) }} className="btn__od" as="button">{name}</Button></MenuItem>

  })





  return (

  //   <FormControl style={props.style} className={props.odClassName} fullWidth>
  //   <InputLabel className={props.odClassName} id="demo-simple-select-autowidth-label">{props.currentComplect ? props.currentOd : 'Количество доступов'}</InputLabel>
  //   <Select
  //     color="primary"
  //     // variant="main"
  //     className="select"
  //   // onChange={ handleChange}
  //   >

  //     {ods}

  //   </Select>
  // </FormControl >
    
      <FormControl color="primary" fullWidth>
        <InputLabel   id="demo-simple-select-autowidth-label">{props.currentComplect ? props.currentOd : 'Количество доступов'}</InputLabel>
        <Select
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            borderRadius: 1,
            p: 3,
          }}
          // variant="main"
          // className="select"
        // onChange={ handleChange}
        >

          {ods}

        </Select>
      </FormControl >
   
  );
}

export default ODButtons