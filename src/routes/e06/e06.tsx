import { useCallback, useState } from 'react';
import './e06.css';

function E06() {
  const [value, setValue] = useState(0)

  console.log('Rendering component')
  const functionId = Math.floor(Math.random() * 1000)

  // handleClick is created once and it takes the functionId value from the first render
  const handleClick = useCallback(() => {
    alert(`Button clicked, function id: ${functionId}`)
  }, [])

  return (
    <div className="container">
      <h1>Exercise 06: useCallback</h1>

      <h1>Value: {value}</h1>
      <div className="button-container">
        <button onClick={() => setValue(Math.floor(Math.random() * 1000))}>Re-render component</button>
      </div>

      <ChildComponent handleClick={handleClick} />

      <h2>Check logs in the console</h2>
      <ul>
        <li>main component is re-rendered when the value changes</li>
        <li>child component is not re-rendered as well when the value changes</li>
        <li>functionId is created fresh when the main component is re-rendered</li>
        <li>functionId printed by the alert is the same as the one created when the main component is rendered first time</li>
      </ul>
    </div>
  )
}

function ChildComponent(props: { handleClick: () => void }) {
  const { handleClick } = props

  console.log('Rendering child component')

  return (
    <div className="container">
      <h1>Child Component</h1>
      <div className="button-container">
        <button onClick={handleClick}>Click me</button>
      </div>
    </div>
  )
}

export default E06