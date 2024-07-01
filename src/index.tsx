import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NavBar } from './components/NavBar/NavBar';
import {Experience} from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Interests } from './components/Interests';
import { Awards } from './components/Awards';
import { Projects } from './components/Projects';
import './scss/resume.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <React.Fragment>
        <NavBar/>
        <Experience/>
        <Projects />
        <Education />
        <Skills />
        <Interests />
        <Awards />
        </React.Fragment>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
