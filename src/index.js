import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const fname = "Oluwadamilare";
const lname = "Ezekiel";

root.render(
  <div>
    <h1 className = "name" contentEditable = "false">
      Hello World: I am {` ${lname} ${fname}`}
    </h1>
    <ul>
      <li>
        Puffer
      </li>
      <li>
        Juice
      </li>
      <li>
        Dough
      </li>
    </ul>

  
    <div>

      <img 
      className='images' 
      src="my-react-app\src\DADDY.jpg"
      alt= "daddy"
      />

      <img 
      className='images' 
      src="my-react-app\src\Dami E Headshot.jpeg"
      alt= "damilare"
      />

    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
