import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className='marginButton'>
        <Link to='/Test2' //</nav>style={{marginRight: "10px"}}
        >
        TestState
        </Link>
        <Link to='/Timer'>Simple Timer</Link>
        <Link to='/ExperimentPage'>Experiment Page</Link>
        <Link to='/OddEven'>OddEven</Link>
        <Link to="/TrafficLights">Traffic Lights</Link>
        <Link to="/Arrays">Arrays</Link>
        <Link to="/ObjectsandArrays">Objects & Arrays</Link>
    </nav>
  )
}
