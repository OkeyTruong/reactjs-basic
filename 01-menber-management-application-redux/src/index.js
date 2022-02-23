import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// redux setup
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import rootReducer from "./store/reducers/rootReducer"

const reduxStore = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
