import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'

import store from './modules/redux/redux-store';

import { render } from 'react-dom'
// components
import App from './App'

export const startApp = (state, store) => {
  
  ReactDOM.render(

    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App store={store} state={state} dispatch={store.dispatch.bind(store)} />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
let state = store.getState()
startApp(state, store);
store.subscribe(() => {
  
  
  startApp(state, store);
})