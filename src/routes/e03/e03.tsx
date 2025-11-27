import { useEffect, useState } from "react"
import './e03.css'

function E03() {
  const [showChild, setShowChild] = useState(false)

  const handleShowChild = () => {
    setShowChild(!showChild)
  }

  return (
    <div className="container">
      <h1>Exercise 03: useEffect mount and cleanup</h1>

      <div className="button-container">
        <button onClick={handleShowChild}>{showChild ? 'Hide Child' : 'Show Child'}</button>
      </div>
      {showChild && <ChildComponent />}

      <h2>Check logs in the console</h2>
      <ul>
        <li>useEffect is triggered only once on mount of the child component</li>
        <li>the function returned by useEffect is called when the child component is unmounted</li>
      </ul>
    </div>
  )
}

function ChildComponent() {
  useEffect(() => {
    console.log('Triggering useEffect on mount of child component')

    return () => {
      console.log('Cleaning up useEffect on unmount of child component')
    }
  }, [])

  return (
    <div>
      <h1>Child Component</h1>
    </div>
  )
}

export default E03