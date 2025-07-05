import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ClinicProvider } from './Context/ClinicContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClinicProvider>
        <App />
      </ClinicProvider>
    </BrowserRouter>
  </React.StrictMode>
);
