// Import React and two of its hooks: useState and useEffect
// useState lets us store and update data (state)
// useEffect lets us run code automatically when something changes or after the component loads
import React, { useState, useEffect } from "react";

// Import two custom components (MyCircle and Rectangle) from another file
import { MyCircle } from "../components/Geometries";
import { Rectangle } from "../components/Geometries";

// Define and export the main component for this page
export default function ExperimentPage(){
    // Declare a state variable called 'counter' and a function 'setCounter' to update it
    // We start with an initial value of 0
    const [counter, setCounter] = useState(0);

    // ---1st useEffect ---
    // This effect sets up a timer that increases the counter ever 2 seconds (2000 ms)
    useEffect(() => {
        // Create an interval that runs every 2 seconds
        const interval = setInterval (() => {
            // Update 'counter' by adding 1 to its current value
            // The arrow function version ensures we always get the latest value
            setCounter((counter) => {
                return counter + 1;
            });
        }, 2000);

        // Cleanup function:
        // This runs when the componentn is removed from the screen (unmounted)
        // It clears the interval to prevent memory leaks or unwanted background activity
        return () => clearInterval(interval);
        // Empty dependency array [] means this effect runs only once when the component first loads
    }, []);

    // --- 2nd useEffect ---
    // This effect runs every time 'counter' changes
    useEffect(() => {
        //Display the current counter value in the browser console
        console.log(counter);

        //Optional: we could return a cleanup function here if needed
    }, [counter]); // dependency: runs only when 'counter'updates

    // --- Component Output (JSX) ---
    // Everything inside 'return' is wjhat gets displayed on the webpage
    return (
        <div>
            <h1>Experiment Page</h1>
            {/*Display the current value of 'counter' */}
            {/* <h1>{counter}</h1> */}

            {/*Pass the counter value down as a prop to the child components */}
            {/*These could use the counter to animate or display changes*/}
            {/*Note: typo fixed - 'colour' and 'colou' should match what the child componenets expect*/}
            <MyCircle colour='blue' counter={counter} />
            <Rectangle colour='green' counter={counter} />
        </div>
    );
}