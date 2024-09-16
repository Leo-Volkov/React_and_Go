import React, { useState } from 'react'

const Counter = function () {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Добавить</button>
      <button onClick={decrement}>Убрать</button>
    </div>
  )
}


export default Counter;