import { useRef } from "react";
import './e04.css';

function E04() {
  const counterRef = useRef(1);

  const handleIncrement = () => {
    counterRef.current++;
  }

  const handleDecrement = () => {
    counterRef.current--;
  }

  const handleShowValue = () => {
    alert(`Counter value: ${counterRef.current}`);
  }

  return (
    <div className="container">
      <h1>Exercise 04: useRef</h1>
      <h1>Counter ref: {counterRef.current}</h1>

      <div className="button-container">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleShowValue}>Show value</button>
      </div>

    </div>
  )
}

export default E04