import { TodoProvider } from '@/context'
// styles
import { Container } from 'react-bootstrap'
// components
import { TodoForm, TodoList, TodoFilters, TodoControls } from '@/components'
import Header from './modules/components/header/header'
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
      
        <Header store={props.store} style={style} state={props.state} dispatch={props.dispatch} mainClass={mainClassRef} />
      </div>

    )
  }


export default App
