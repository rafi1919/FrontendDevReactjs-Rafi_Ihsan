import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';

import Main from './component/Main';
import Topnav from './component/Topnav';
import CardDetail from './component/CardDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Topnav />
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/card/:id" element={<CardDetail />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
