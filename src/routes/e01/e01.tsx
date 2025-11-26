import { useState } from "react"
import './e01.css'

function E01() {
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  const handleDecrement = () => {
    setCounter(counter - 1)
  }

  const handleReset = () => {
    setCounter(0)
  }

  const handleSetDouble = () => {
    setCounter(counter * 2)
  }

  const handleSetRandom = () => {
    setCounter(Math.floor(Math.random() * 100))
  }

  return (
    <div className="container">
      <h1>Exercise 01: useState</h1>
      <h1>Counter: {counter}</h1>

      <div className="button-container">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSetDouble}>Set Double</button>
        <button onClick={handleSetRandom}>Set Random</button>
      </div>
    </div>
  )
}

export default E01