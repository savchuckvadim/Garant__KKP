import { useEffect } from 'react';
import './App.css'
import MainContainer from './modules/components/main/main-Container';


const App = (props) => {
  useEffect(() => {
    props.getPrices()
  }, [])
  
  return (
    <MainContainer />
  )
}


export default App
