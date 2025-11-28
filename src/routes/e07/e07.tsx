import { useContext, useState, createContext } from 'react';
import './e07.css';

const ThemeContext = createContext({
  theme: 'light',
  setTheme: (_theme: string): void => { throw new Error('Function not implemented.') },
})

function E07() {
  const [theme, setTheme] = useState('light')

  const handleSetTheme = (theme: string) => {
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      <div className="container">
        <h1>Exercise 07: useContext</h1>
        <h1>Theme: {theme}</h1>
        <ChildComponent />
        <ul>
          <li>theme is passed to the child component via the context</li>
          <li>child component can change the theme using the callback provided by the context</li>
        </ul>
      </div>
    </ThemeContext.Provider>
  )
}

function ChildComponent() {
  const { setTheme } = useContext(ThemeContext)
  return (
    <div className="container">
      <h1>Child Component</h1>
      <div className="button-container">
        <button onClick={() => setTheme('light')}>Light</button>
        <button onClick={() => setTheme('dark')}>Dark</button>
      </div>
    </div>
  )
}

export default E07