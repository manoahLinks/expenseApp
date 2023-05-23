import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { AuthContextProvider } from './context/AuthContext';
import { DataContextProvider } from './context/dataContext';
import { ErrorBoundary } from './context/ErrorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <AuthContextProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </AuthContextProvider>
  </ErrorBoundary>
    ,
  document.getElementById('root')
);
