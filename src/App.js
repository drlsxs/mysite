/*
 * @Author: yangshilin
 * @Date: 2023-07-04 13:12:45
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-04 21:59:52
 * @FilePath: src\App.js
 * @Description: 请添加文件描述
 */
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Home from "./page/Home";
import Project from "./page/Project";
import Blog from "./page/Blog";
import ProDetail from "./page/ProjectDetail";
import "./utils/dom";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/project" element={<Project/>}/>
        <Route exact path="/project/project_detail" element={<ProDetail/>}/>
        <Route exact path="/blog" element={<Blog/>}/>
      </Routes>
    </Router>
  );
}

export default App;
