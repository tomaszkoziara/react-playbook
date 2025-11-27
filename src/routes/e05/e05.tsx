import { useMemo, useState } from 'react';
import './e05.css';

function E05() {
  const [prefix, setPrefix] = useState('Child 1')

  return (
    <div className="container">
      <h1>Exercise 05: useMemo</h1>
      <input type="text" value={prefix} onChange={(e) => setPrefix(e.target.value)} />
      <ChildComponent prefix={prefix} count={10000} />

      <h2>Check logs in the console</h2>
      <ul>
        <li>useMemo is triggered only once on mount of the child component</li>
        <li>the child component is re-rendered when the prefix changes, but the useMemo is not triggered again</li>
      </ul>
    </div>
  )
}

function ChildComponent(props: { prefix: string, count: number }) {
  console.log(`[${props.prefix}] ChildComponent rendered`)

  const [result, setResult] = useState(0)

  useMemo(() => {
    console.log(`[${props.prefix}] running a complex computation`)
    let tmp = 0
    for (let i = 0; i < props.count; i++) {
      tmp += 1
    }
    setResult(tmp)
  }, [props.count])

  return (
    <div>
      <h1>Inner Component</h1>
      <h1>Result: {result}</h1>
    </div>
  )
}

export default E05