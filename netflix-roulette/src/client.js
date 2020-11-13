import React from 'react';
import { hydrate } from 'react-dom';

import App from './App';

const app = (
  <App />
);

hydrate(app, document.getElementById('root'));
