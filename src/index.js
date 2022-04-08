import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Skill from './skill';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <About />
    <Skill />
    <Projects />
    {/* <Contact /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
