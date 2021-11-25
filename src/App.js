
import Header from './modules/components/header/header'
import Main from './modules/components/main/main'
import './App.css'
const App = (props) => {
  
    let currentTheme = props.state.theme.style[props.state.theme.indexOfTheme]
    const styleFromState = props.state.theme.style[props.state.theme.indexOfTheme]

    let style = {

      color: styleFromState.color,
      textColor: styleFromState.textColor,
      backgroundPosition: `center`,
      transform: `rotateZ(720deg)`
    }

    const mainClassRef = React.createRef()
    return (

      <div ref={mainClassRef} className={currentTheme.currentMainClass}>
        <Header mainClass={mainClassRef} />
        <Main className={currentTheme.currentMainClass} />
      </div>

    )
  }


export default App
