import React from 'react';
import {useState} from 'react';
import "./Counter.css";

export default function Test2() {
    const [counter, setCounter] = useState(0);
    const [myDate, setMyDate] = useState(null);
    
    return ( 
        <div className='App'>
            <div className='box1'>
                <p>Today's Date: {myDate ? myDate.toLocaleDateString() : "?"}</p>
                <p>The value of counter is "{counter}"</p>
                <button className='up' onClick={increment}>Increment</button>
                <button className='down' onClick={decrement}>Decrement</button>
                <button className='reset' onClick={reset}>Reset Counter</button>
                <button className='date' onClick={displayDate}>Display Date</button>
            </div>
        </div>
    );

    function displayDate() {
        setMyDate (new Date());
    }

    function increment(){
        setCounter(counter + 1);
        console.log(counter);
    }
    function decrement(){
        setCounter(counter - 1);
        console.log(counter);
    }

    function reset(){
        setCounter(0);
        console.log(counter);
    }
}
