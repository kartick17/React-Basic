import { useState } from 'react'
import './App.css'


function App() {
  let [counter, setCounter] = useState(10);
  console.log("apprender");
  
  const increaseVal = () => {
    if (counter >= 20) return;
    setCounter(counter => counter+1);
    setCounter(counter => counter+1);
    setCounter(counter => counter+1);
  }

  const decreaseVal = () => {
    if (counter <= 0) return;
    setCounter(counter-1);
  }
  
  return (
    <>
      <h1>React Counter App</h1>
      <h3>Counter value : {counter}</h3>

      <button onClick={increaseVal}>Increase value</button><br /><br />
      <button onClick={decreaseVal}>Decrease value</button>
    </>
  )
}

export default App
