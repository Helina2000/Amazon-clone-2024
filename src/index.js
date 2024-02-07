import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataProvider } from './components/DataProvider/DataProvider';
import { Reducer, initialstate } from "./pages/Utility/Reducer"; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider Reducer={Reducer} initialstate={initialstate}>

      <App />

    </DataProvider>
  </React.StrictMode>
);


