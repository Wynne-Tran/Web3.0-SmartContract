// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();


   
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionProvider } from "./context/TransactionContext";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TransactionProvider>
    <App />
  </TransactionProvider>
);
