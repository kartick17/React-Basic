import BillInput from "./components/BillInput";

import React, { useState } from 'react'
import SelectParcentage from "./components/SelectParcentage";
import Result from "./components/Result";
import ResetButton from "./components/ResetButton";

function App() {
  const [billAmount, setBillAmount] = useState('')
  const [parcentage1, setParcentage1] = useState(0)
  const [parcentage2, setParcentage2] = useState(0)
  const average = (+parcentage1 + +parcentage2) / 2;
  const tip = +billAmount * (average / 100)

  const handleReset = () => {
    setBillAmount('')
    setParcentage1(0)
    setParcentage2(0)
  }


  return (
    <>
      <BillInput billAmount={billAmount} onHandleBillAmount={setBillAmount} />
      <SelectParcentage parcentage={parcentage1} onChange={setParcentage1}>How did you like the service?</SelectParcentage>
      <SelectParcentage parcentage={parcentage2} onChange={setParcentage2}>How did your friend like the service?</SelectParcentage>
      {billAmount &&
        <>
          <Result billAmount={billAmount} tips={tip} />
          <ResetButton onReset={handleReset} />
        </>
      }
    </>
  )
}

export default App