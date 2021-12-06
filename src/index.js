import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { BX24 } from "bx24";


import store from './modules/redux/redux-store';

import { render } from 'react-dom'
// components
import App from './App'
import { darkModeTheme, theme } from './styles/theme';

export const startApp = (state, store) => {



  ReactDOM.render(

    // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={darkModeTheme}>
          <App state={state} />
        </ThemeProvider>
      </Provider>
    </BrowserRouter >,
    // </React.StrictMode>,
    document.getElementById('root')
  );
}
let state = store.getState()
startApp(state, store);
store.subscribe(() => {


  startApp(state, store);
})