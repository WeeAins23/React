import React, { useState, useEffect } from "react";

export default function ObjectsAndArrays() {
    // ---------------------------------------
    // OBJECTS, ARRAYS & DESTRUCTURING EXAMPLE
    // ---------------------------------------
    // function to calculate the grade
    function calculateGrade_1(mark) {
        if (mark >= 80) return "A";
        if (mark >= 70) return "B";
        if (mark >= 60) return "C";
        if (mark >= 50) return "D";
        return "F";
    }

    //Or - using Arrow function
    const calculatorGrade_2 = (mark) => {
        if (mark >= 90) return "A";
        if (mark >= 80) return "B";
        if (mark >= 70) return "C";
        if (mark >= 60) return "D";
        return "F";
    };

    //Step 1: Create an array of objects.
    // Each object represents a student with id, name, and exam mark
    const initialStudents = [
        { id: 1, name: "Alice Johnson", mark: 82, grade: calculateGrade_1(82)}, // cannot use grade: calculateGrade(mark) - mark is not defined yet
        { id: 2, name: "Ben Thompson", mark: 75, grade:calculateGrade_1(75) },
        { id: 3, name: "Carla White", mark: 93, grade:calculateGrade_1(93)},
        { id: 4, name: "David Lee", mark: 68, grade:calculateGrade_1(68)},
        { id: 5, name: "Eva Green", mark: 88, grade:calculateGrade_1(88) },
    ];

    // -------------------------------
    // Step 2: Store this array in React state
    // -------------------------------
    const [students, setStudents] = useState(initialStudents);

    // -------------------------------
    // Step 3: useEffect
    // -------------------------------
    // useEffect runs when the component first loads. We'll use it to calculate the class average.
    const [average, setAverage] = useState(0);

    useEffect(() => {
        // Calculate average mark whenever 'students' changes.

        const total = students.reduce((sum, s) => sum + s.mark, 0);
        // Reduce is a built-in array method which accumulates a single value from an array, we use it here to sum up all the marks then divide by number of students to get average
        const avg = total / students.length;
        setAverage(avg.toFixed(1)); //round to one decimal
        // toFixed() tidies up messy decimal numbers, that is rounding to 1 decimal point.
    }, [students]); //trigger effect when student array changes
    // dependency array ensures this effect runs only when 'students' changes

    // -------------------------------
    // Step 4: Add a new student (for illustration)
    // -------------------------------

    const addRandomStudent = () => {
        // Create a new student object
        const myMark = Math.floor(Math.random() * 101); // random mark between 0 - 100
        const newStudent = {
            id: students.length + 1, //unique id using timestamp
            name: "New Student [" + (students.length + 1) + "]",
            mark: myMark,
            grade: calculateGrade_1(myMark),
        };

        // Update state with new array (spread syntax)
        // "..." ("spread operator") -...student - it means: "Take all the properties from the object student, and copy them into this new object"
        setStudents([...students, newStudent]);
    };

    // -------------------------
    // Step 5: Render UI
    // -------------------------
    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2>Student Marks Example</h2>
            <p>This demo illustrates objects, arrays, and destructuring in React.</p>

            <h3>Class Average: {average}</h3>

            {/* Display list of students */}
            <ul>
                {students.map((student) => {
                    //Destructure objects for cleaner access
                    const { id, name, mark, grade } = student;

                    //Render each student
                    return (
                        <li key={id} style={{ marginBottom: "8px" }}>
                            <strong>
                                <span>
                                    id: {student.id + "- "}
                                    name: {name + ", "}
                                    Mark: {mark + ", "}
                                    Grade: {grade}
                                </span>
                            </strong>
                        </li>
                    );
                })}
            </ul>
            <button className="box1" onClick={addRandomStudent}>
                Add Random Student
            </button>
        </div>
    );
}