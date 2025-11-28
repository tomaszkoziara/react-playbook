import { useState, useEffect } from "react"
import './e02.css'

function E02() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('Triggering useEffect without dependencies')
  }, [])

  useEffect(() => {
    console.log('Triggering useEffect with dependencies')
  }, [counter])

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  const handleDecrement = () => {
    setCounter(counter - 1)
  }

  return (
    <div className="container">
      <h1>Exercise 02: useEffect</h1>
      <h1>Counter: {counter}</h1>

      <div className="button-container">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>

      <h2>Check logs in the console</h2>
      <ul>
        <li>useEffect without dependencies is triggered only once on mount</li>
        <li>useEffect with dependencies is triggered whenever the dependency changes (logs may be compacted)</li>
      </ul>
    </div>
  )
}

export default E02