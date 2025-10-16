import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className='marginButton'>
        <Link to='/Test2' style={{marginRight: "10px"}}>
        TestState
        </Link>
        <Link to='/Timer'>Simple Timer</Link>
        <Link to='/ExperimentPage'>Experiment Page</Link>
        <Link to='/OddEven'>OddEven</Link>
    </nav>
  )
}
