/*
 * @Author: yangshilin
 * @Date: 2023-07-04 13:19:12
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-04 13:19:12
 * @FilePath: src\index.js
 * @Description: 请添加文件描述
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'github-calendar/dist/github-calendar-responsive.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
