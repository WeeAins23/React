import React, {Component} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Test2 from './pages/Test2';
import Timer from './pages/Timer';
import ExperimentPage from './pages/ExperimentPage';
import OddEven from './pages/OddEven';
import TrafficLights from './pages/TrafficLights';
import Arrays from './pages/Arrays';
import ObjectsandArrays from './pages/ObjectsandArrays';

import Nav from './components/Navbar'

function App() {
  return (
    <Router>
        <Nav />
        <div className='page-content'>
          <Routes>
            <Route path='Test2' element={<Test2 />} />
            <Route path='/Timer' element={<Timer />} />
            <Route path='/ExperimentPage' element={<ExperimentPage />} />
            <Route path='/OddEven' element={<OddEven />} />
            <Route path="/TrafficLights" element={<TrafficLights />} />
            <Route path="/Arrays" element={<Arrays />} />
            <Route path="/ObjectsandArrays" element={<ObjectsandArrays />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
