import Button from '@material-ui/core/Button';
import  "./buttons.css";
import styled from 'styled-components';


const ResetButton = (props) => {
 
   const Button = styled.button`
   background-color: ${props => props.theme.backgroundColor},
   border-radius: 2px !important,
   height: 54px;

    transition-property: background-color, transform, color;
    transition-duration: 0.5s;
    transition-delay: 0.0s; 

    font-style: bold !important;
    font-size: 11px !important;

    font-weight: 400 !important;
    line-height: 22px !important;
    letter-spacing: -0.3px !important;
   
    background-position: 36.4vh;
    background-repeat: no-repeat;
   `
    

    return (
        <Button style={props.style} onClick={props.reset} className="btn__reset" type="button" >СБРОСИТЬ <img src={props.deleteIcon} alt="" /></Button>
    )
}

export default ResetButton