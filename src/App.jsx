import { useEffect } from 'react';
import './App.css'
import MainContainer from './modules/components/main/main-Container';
import Preloader from './modules/components/Preloader/Preloader';


const App = (props) => {
  useEffect(async () => {
    await props.getPrices()
   
  }, [])

  if (props.preloader === true ) {return <Preloader/> } else {return <MainContainer />  }

}


export default App
