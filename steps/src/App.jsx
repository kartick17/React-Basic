import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    setStep(prev => prev > 1 ? prev - 1 : prev);
  }

  function handleNext() {
    setStep(prev => prev < 3 ? prev + 1 : prev);
  }

  return (
    <>
      <button className="text-5xl absolute top-2 right-4 text-stone-500 hover:text-indigo-600" onClick={() => setIsOpen(is => !is)}>&times;</button >
      {isOpen && (<div className="flex justify-center mt-20">
        <div className="bg-stone-100 w-[35rem] py-8 px-4 flex flex-col gap-12 rounded-lg text-stone-700">
          <div className="flex justify-around text-xl">
            <div className={`px-4 py-2 rounded-3xl ${step >= 1 ? 'bg-indigo-600 text-white' : 'bg-stone-300'} `}>1</div>
            <div className={`px-4 py-2 rounded-3xl ${step >= 2 ? 'bg-indigo-600 text-white' : 'bg-stone-300'} `}>2</div>
            <div className={`px-4 py-2 rounded-3xl ${step >= 3 ? 'bg-indigo-600 text-white' : 'bg-stone-300'} `}>3</div>
          </div>
          <h2 className="m-auto text-xl font-semibold">Step {step}: {messages[step - 1]}</h2>
          <div className="flex justify-around">
            <button className="bg-indigo-600 px-4 py-1 rounded-2xl text-white font-medium" onClick={handlePrevious}>Previous</button>
            <button className="bg-indigo-600 px-4 py-1 rounded-2xl text-white font-medium" onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>)
      }
    </>
  )
}

export default App