import {useState} from 'react'

function App(){
  const [count, setCount] = useState(0)

  function IncreaseCount(){
    setCount(count + 1)
  }
  function DecreaseCount(){
    setCount(count - 1)
  }
  function resetCount(){
    setCount(0)
  } 
  return(
    <div>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={IncreaseCount}>Increase</button>
      <button onClick={DecreaseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button> 
    </div>
  )
}

export default App