// Import React features and your own components
import React, { useState } from 'react'; // You can import React explicitly
import './App.css'; // Optional styling
import ButtonCompo from './component/ButtonCompo'; // Custom child component
import Cards from './component/cards'; // Make sure folder and file names match exactly

function App() {
  /**
   * useState is a React Hook that allows you to add state to a functional component.
   * clickCount → state variable (current value)
   * setCount → function to update the value of clickCount
   * useState(0) → initializes clickCount with 0
   */
  const [clickCount, setCount] = useState(0);

  /**
   * This function is triggered when the "Click Me" button is clicked.
   * We calculate the new value (clickCount + 1) without modifying state directly.
   * setCount(newCount) updates the state and causes the component to re-render.
   */
  const clickHandle = () => {
    const newCount = clickCount + 1;
    setCount(newCount);
    console.log(`Click Count: ${newCount}`);
  };

  return (
    <>
      {/* Display greeting */}
      <div>Hi React</div>

      {/* Render a reusable child component */}
      <ButtonCompo />

      {/* Button to update state */}
      <button onClick={clickHandle}>Click Me</button>

      {/* Display the current click count */}
      <div>Count Status of Click me: {clickCount}</div>

      {/* User Cards Section */}
      <div>
        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>User Cards</h1>
        <Cards />
      </div>
    </>
  );
}

export default App;
