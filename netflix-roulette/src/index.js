import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./configure-store";

import './index.scss';
import App from './App';

const initialState = global.window && global.window.__INITIAL_STATE__
const store = configureStore(initialState);

// ReactDOM.hydrate(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.hydrate(<App store={store}/>, document.getElementById('root'));