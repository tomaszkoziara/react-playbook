import { useState, memo } from 'react';
import './e09.css';

function E09() {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('Child 1')

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  const handleDecrement = () => {
    setCounter(counter - 1)
  }

  return (
    <div className="container">
      <h1>Exercise 09: React.memo</h1>
      <h1>Counter: {counter}</h1>
      <div className="button-container">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <div className="input-container">
        <label htmlFor="name">Child component name: </label>
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <ChildComponent name={name} />
      <ul>
        <li>React.memo is used to memoize the child component</li>
        <li>when changing the counter, the child component is not re-rendered</li>
        <li>child component is re-rendered only when the name changes</li>
        <li>without memo child component would be re-rendered on every counter change</li>
      </ul>
    </div>
  )
}

const ChildComponent = memo(function ChildComponent(props: { name: string }) {
  console.log('Rendering child component')

  return (
    <div className="container">
      <h1>Child Component: {props.name}</h1>
    </div>
  )
})

export default E09