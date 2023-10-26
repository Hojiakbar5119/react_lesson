import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Student from './Lesson2/student';
import FunctionCall from './Lesson3/functionCall';
import Crud from './Lesson4/crud';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Fruit /> */}
    {/* <Student/>   */}
    {/* <FunctionCall/> */}
    <Crud/>
  </React.StrictMode>
);
