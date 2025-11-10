// import React, {Component} from "react";
import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Test2 from './pages/Test2';
import Timer from './pages/Timer';
import ExperimentPage from './pages/ExperimentPage';
import OddEven from './pages/OddEven';
import TrafficLights from './pages/TrafficLights';
import Arrays from './pages/Arrays';
import ObjectsandArrays from './pages/ObjectsandArrays';
import Login from "./pages/LogIn";
// import Pet from "./pages/Pet";
// import VariablesAndState from "./pages/VariablesAndStates";

import Nav from './components/Navbar';
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Called when Login component reports success
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Called when user clicks Logout button
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Show Login screen first
  if (!isLoggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  // Once logged in, show the main app and a Logout button
  return (
    <Router>
      {/* Navbar always at the top*/}
      <Nav />
      <div className="page-content">
        {/* Logout button at top right corner */}
        <div style={{ textAlign: "right", margin: "10px" }}>
          <button class="down" onClick={handleLogout}>
            Logout
          </button>
        </div>

        {/* <div className="page-content"> */}
        <Routes>
          <Route path='Test2' element={<Test2 />} />
            <Route path='/Timer' element={<Timer />} />
            <Route path='/ExperimentPage' element={<ExperimentPage />} />
            <Route path='/OddEven' element={<OddEven />} />
            <Route path="/TrafficLights" element={<TrafficLights />} />
            <Route path="/Arrays" element={<Arrays />} />
            <Route path="/ObjectsandArrays" element={<ObjectsandArrays />} />
            {/* <Route path="/Pet" element={<Pet />} />
            <Route path="/VariablesAndStates" element={<VariablesAndStates />} /> */}
        </Routes>
        {/* Footer always at the bottom */}
      </div>
    </Router>
  )
}

// function App() {
//   return (
//     <Router>
//         <Nav />
//         <div className='page-content'>
//           <Routes>
//             <Route path='Test2' element={<Test2 />} />
//             <Route path='/Timer' element={<Timer />} />
//             <Route path='/ExperimentPage' element={<ExperimentPage />} />
//             <Route path='/OddEven' element={<OddEven />} />
//             <Route path="/TrafficLights" element={<TrafficLights />} />
//             <Route path="/Arrays" element={<Arrays />} />
//             <Route path="/ObjectsandArrays" element={<ObjectsandArrays />} />
//           </Routes>
//         </div>
//     </Router>
//   );
// }

// export default App;
