import { useState } from 'react'

export function ClickCounter() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <button onClick={() => setCounter((c) => c + 1)}>Count {counter}</button>
    </div>
  )
}
