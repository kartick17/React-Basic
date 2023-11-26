import { useState } from 'react'
import './App.css'

function App() {
  return (
    <Count />
  )
}


function Count() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1)


  const date = new Date(Date.now())
  date.setDate(date.getDate() + counter)
  console.log(date);


  return (
    <>
      <h1>React Counter App</h1>
      <div className='line'>
        <button onClick={() => setStep(s => s - 1)}>-</button>
        <h3>Step : {step}</h3>
        <button onClick={() => setStep(s => s + 1)}>+</button>
      </div>

      <div className='line2'>
        <button onClick={() => setCounter(c => c - step)}>-</button>
        <h3>Count : {counter}</h3>
        <button onClick={() => setCounter(c => c + step)}>+</button>
      </div>

      <h2>
        <span>
          {counter === 0
            ? 'Today is '
            : counter > 0
              ? `${counter} days from today is `
              : `${Math.abs(counter)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </h2>
    </>
  )
}

export default App
