/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.getElementsByTagName('body')[0].setAttribute('data-theme', 'light');
root.render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>
);

reportWebVitals();
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

document.body.setAttribute('data-theme', 'light');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);