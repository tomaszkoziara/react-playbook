import { useState, useEffect } from 'react';
import './e08.css';

function useFetchWithDelay<T>(url: string): { data: T | null, error: Error | null, isLoading: boolean } {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      fetch(url)
        .then(response => {
          if (!response.ok || response.status !== 200) {
            throw new Error('Failed to fetch data')
          }
          return response.json()
        })
        .then(setData)
        .catch(setError)
        .finally(() => setIsLoading(false))
    }, 1000)
  }, [url])

  return { data, error, isLoading }
}

function E08() {
  const { data, error, isLoading } = useFetchWithDelay<{ id: number, name: string }[]>('https://jsonplaceholder.typicode.com/users')

  return (
    <div className="container">
      <h1>Exercise 08: custom hook</h1>
      <h1>Loading: {isLoading ? 'true' : 'false'}</h1>
      <h1>Data:</h1>
      <ul>
        {data && data instanceof Array && data.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <h1>Error: {error?.message}</h1>
    </div>
  )
}

export default E08