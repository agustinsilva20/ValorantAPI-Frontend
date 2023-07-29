import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./Component/Main/Main"
import RiotText from './Component/RiotTXT/RiotTXT';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/riot.txt" element={<RiotText />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;