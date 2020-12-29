import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CanvasDiv from './component/CanvasDiv';
import Navbar from './component/Navbar';
import LeftSidebar from './component/LeftSidebar';
import ContentDiv from './component/ContentDiv';


ReactDOM.render(
  <React.StrictMode>
    <CanvasDiv/>
    <Navbar/>
    <LeftSidebar/>
    <ContentDiv/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
