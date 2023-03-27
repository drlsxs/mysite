import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Home from "./page/Home";
import Project from "./page/Project";;

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/project" element={<Project/>}/>
            </Routes>
        </Router>
    );
}

export default App;
