import React, { useState, useEffect } from 'react';
import './TrafficLights.css'; 

const TrafficLights = () => {
  // 1. STATE: Keeps track of which light is currently on ('red', 'amber', 'green').
  // We'll start with 'red'.
  const [activeLight, setActiveLight] = useState('red');

  // 2. EFFECT: This hook runs a timer to automatically change the lights.
  useEffect(() => {
    // The sequence of lights
    const sequence = ['red', 'green', 'amber'];
    
    // Set an interval to run every 2 seconds (2000ms)
    const interval = setInterval(() => {
      // This function updates the state based on the current active light
      setActiveLight(currentLight => {
        if (currentLight === 'red') {
          return 'green'; // After red, turn green
        } else if (currentLight === 'green') {
          return 'amber'; // After green, turn amber
        } else {
          return 'red'; // After amber, go back to red
        }
      });
    }, 2000); // Change light every 2 seconds

    // 3. CLEANUP: This is important! When the component is removed,
    // we clear the interval to prevent errors and memory leaks.
    return () => clearInterval(interval);
    
  }, []); // The empty array [] means this effect runs only once when the component first loads.

  // 4. DISPLAY (JSX): This is what gets rendered on the screen.
  return (
    <div className="traffic-light-container">
      <h1>Traffic Lights</h1>
      <div className="traffic-light-box">
        {/* The 'active' class is added conditionally based on the current state */}
        <div className={`light red ${activeLight === 'red' ? 'active' : ''}`}></div>
        <div className={`light amber ${activeLight === 'amber' ? 'active' : ''}`}></div>
        <div className={`light green ${activeLight === 'green' ? 'active' : ''}`}></div>
      </div>
    </div>
  );
};

export default TrafficLights;