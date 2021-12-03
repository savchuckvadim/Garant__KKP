
import Header from './modules/components/header/header'
import Main from './modules/components/main/main'
import './App.css'
import { useTheme } from '@material-ui/core';
import MainContainer from './modules/components/main/main-Container';
const App = (props) => {
  const theme = useTheme();
  let currentTheme = props.state.theme.style[props.state.theme.indexOfTheme];
  let currentComplect = props.state.currentComplect
  const styleFromState = props.state.theme.style[props.state.theme.indexOfTheme]

  let style = {

    color: styleFromState.color,
    textColor: styleFromState.textColor,
    backgroundPosition: `center`,
    transform: `rotateZ(720deg)`
  }

  const mainClassRef = React.createRef()
  return (

    <div ref={mainClassRef}
      
      className={currentTheme.currentMainClass}>
      <div>{theme.palette.mode}</div>
      {/* <Header mainClass={mainClassRef} /> */}
      <MainContainer className={currentTheme.currentMainClass} currentComplect={currentComplect} />
    </div>

  )
}


export default App
