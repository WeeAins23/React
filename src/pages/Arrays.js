import React from "react";
export default function Arrays() {
    // Define three arrays containing strings
    // Each array can be assessed using it's index (starting with 0)
    const colours = ["red", "yellow", "blue", "green", "purple"];
    const fruits = ["apple", "banana", "orange"];
    const cities = ["Edinburgh", "Glasgow", "Dundee", "Aberdeen", "Stirling"];
    const upperCities = cities.map(myCities => myCities.toUpperCase());

    // Example of acceing a single array eleemnt
    console.log(colours[0]); // Logs "red"

    // A standard for loop to display each colour in the console
    // The loop continues until i is equal to the array length
    for (let i = 0; i < colours.length; i++) {
        console.log(colours[i]);
    }

    // Using the map() method to create a new array
    // map() runs once for each element and returns a new array
    const upperFruits = fruits.map((myFruit) => myFruit.toUpperCase())
    console.log(upperFruits); // ["APPLE", "BANANA", "ORANGE"]

    // JSX section - what appears on the web page
    return (
        <div>
            <h1> Arrays</h1>
            {/* Inline styling example:
                The background colour is taken from the second item in the colours array*/}
                <p style={{ backgroundColor: colours[1]}}>
                    The second item in the colours array is {colours[1]}
                    <br />
                    The corresponding fruit for this colour in the fruits array is {" "}
                    {fruits[1]}
                </p>

                <h2> Fruit's List </h2>
                {/* Displaying all fruits dynamically.
                    Added a unique 'key' prop to each h3 element.
                    Changed the parameter name to 'fruit' for clarity. */}
                
                <ul>
                {fruits.map((fruit, index) => (
                    <li
                        key={fruit} style={{color: colours[index % colours.length]}}>
                        {fruit}
                    </li>
                ))}

            </ul>

                <h2> Cities </h2>
                
            <ul>
                    {upperCities.map((city, index) => (
                    <li
                        key={city}
                        style={{ color: colours[index % colours.length] }}
                    >
                        {city}
                    </li>
                    ))}
            </ul>
        </div>
    );
}