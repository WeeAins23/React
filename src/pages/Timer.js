// using Arrow functions

import React, { useState, useEffect } from "react";

export default function Timer() {
    <h1>Using States</h1>;
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // setInterval is a built-in JavaScript function that repeats a task every X milliseconds
        // Start an interval that updates seconds every 1000ms
        const interval = setInterval(() => {
            setSeconds((mySeconds) => {
                //call the parameter anything
                return mySeconds + 1;
            });
        }, 1000);
        return () => clearInterval(interval); //cleanup on unmount
    }, []);

    useEffect(() => {
        console.log(seconds);
    }, [seconds]);

    return(
        <h1>
            <span style={{color: "blue", fontSize: "20px"}}>{seconds} Seconds </span>
        </h1>
    );
}

//Using Classical function

// import React, {useState, useEffect } from "react";
// export default function Timer() {
//     const [seconds, setSeconds] = useState(0);

//     useEffect(function () {
//         //Define a classical function for the interval callback
//         function tick() {
//             setSeconds(function (mySeconds) {
//                 return mySeconds + 1;
//             });
//         }

//         // Start the interval
//         const interval = setInterval(tick, 1000); //run the function tick() every 100ms

//         //cleanup
//         return function () {
//             clearInterval(interval);
//         };
//     }, []); //empty array so it runs once

//     useEffect(
//         function() {
//             console.log(seconds);
//         },
//         [seconds]
//     ); //This effect runs every time the value of seconds changes

//     return (
//         <h1>
//             <span style={{ color: "blue", fontSize: "20px"}}>{seconds} Seconds</span>
//         </h1>
//     );
// }