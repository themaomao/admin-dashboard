import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <App />
   </BrowserRouter>
  </React.StrictMode>
);


/*this area different with what original is, app been wrapped by browserrouter. 
see more note about it on App.js*/

/*what i need to download for this project:
1. npm install @nivo/core @nivo/charts - - - the nivo charts
2. 
 */