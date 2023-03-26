import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './page/Home';
import GlobalStyle from "./styles/GlobalStyle";

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default App;
