import React from "react";
import "../pages/svg.css"; //Import CSS for SVG animations or styles

// This file creates two shapes: a circle and a rectangle
// Each one changes colour or opacity when the counter changes

// ========================
// CIRCLE COMPONENT
// ========================
export function MyCircle(props) {
    //This shows the colour passed from the parent component (ExperimentPage)
    console.log("colour = ", props.colour);

    // We don't need useEffect here because the parent (ExperimentPage) is already sending the updated "counter" value as a prop

    // Return the SVG circle
    return(
        <svg width='100' height='100' viewBox='0 0 100 100'>
            <circle
            className='animated=-circle'
            cx='50' // x-position of the circle centre
            cy='50' // y-position of the circle centre
            r='45' // radius of the circle
            stroke='silver' // outline colour
            strokeWidth='10' // outline thickness
            // Change colour every time the counter changes:
            // Even numbers are black, odd numbers are gold
            fill={props.counter % 2 === 0 ? "black" : "gold"}
            //Also change how see through (opacity) the circle is
            opacity={props.counter % 2 === 0 ? 0.1 : 0.7}

            //The code below shows other ways to use props.colour, but they are commented for now.
            // fill={props.colour}
            // fill={props.colour || "green"}
            // fill={props.colour ? props.colour : "lightblue"}
            />
        </svg>
    );
}

// ========================
// RECTANGLE COMPONENT
// ========================

export function Rectangle(props) {
    return (
        <svg width='200' height='200' viewBox='0 0 100 300'>
            <rect
            className='animated-rect'
            x='10' // Left position of rectangle
            y='10' // top position
            width='100' // width of the rectangle
            height='100' // height of the rectangle
            rx='1' // corner curve on x-axis
            ry='21' // corner curve on y-axis
            stroke='gray' // border colour
            strokeWidth='8' // border thicknness
            //Change fill and opacity depending on the counter:
            // Even is black and solid, Odd is red and see-through
            fill={props.counter % 2 === 0 ? "black" : "red"}
            opacity={props.counter % 2 === 0 ? 1 : 0.5}
            />
        </svg>
    );
}