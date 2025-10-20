import React, { useState } from 'react';
import './OddEven.css'; 

const OddEven = () => {
  // 1. STATE: The counter's state lives directly inside this component.
  const [count, setCount] = useState(0);

  // 2. LOGIC: The functions to modify the state also live here.
  const handleIncrement = () => {
    setCount(currentCount => currentCount + 1);
  };

  const handleDecrement = () => {
    setCount(currentCount => currentCount - 1);
  };

  // Determine styles based on the state
  const isEven = count % 2 === 0;
  const parityText = isEven ? 'Even' : 'Odd';
  const cardStyleClass = isEven ? 'style-even' : 'style-odd';

  // 3. DISPLAY (JSX): The component renders its own display and buttons.
  return (
    <div className="oddeven-page-container">
      <h1>Odd/Even Counter</h1>

      <div className={`card-display ${cardStyleClass}`}>
        <div className="number-box">
          <h2>{count}</h2>
        </div>
        <p>{parityText}</p>
      </div>

      <div className="button-group">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default OddEven;