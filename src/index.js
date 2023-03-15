import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';


// Amplify.Logger.LOG_LEVEL = 'DEBUG';
Amplify.configure(awsconfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


