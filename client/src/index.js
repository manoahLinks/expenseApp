import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { AuthContextProvider } from './context/AuthContext';
import { DataContextProvider } from './context/dataContext';

ReactDOM.render(
  <AuthContextProvider>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </AuthContextProvider>
    ,
  document.getElementById('root')
);
