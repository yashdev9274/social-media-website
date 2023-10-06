import React from 'react';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import './App.css';
import {Main} from './pages/main';
import {Login} from './pages/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<Main/>}/>
          <Route path = "/login" element = {<Login/>}/>

        </Routes>
        </Router>
    </div>
  );
}

export default App;
