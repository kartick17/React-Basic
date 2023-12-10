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
            <StepNo step={step} currentStep={1} />
            <StepNo step={step} currentStep={2} />
            <StepNo step={step} currentStep={3} />
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="flex justify-around">
            <Button bgColor='bg-indigo-600' textColor='text-white' onclick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor='bg-indigo-600' textColor='text-white' onclick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      </div >)
      }
    </>
  )
}

function StepNo({ step, currentStep }) {
  return (
    <div className={`px-4 py-2 rounded-3xl ${step >= currentStep ? 'bg-indigo-600 text-white' : 'bg-stone-300'} `}>
      {currentStep}
    </div>
  )
}

function StepMessage({ step, children }) {
  return (
    <div className="m-auto text-center text-xl font-semibold">
      <h2>Step {step}</h2> {children}
    </div>
  )
}

function Button({ textColor, bgColor, children, onclick }) {
  return (
    <button className={`${textColor} ${bgColor} px-4 py-1 rounded-2xl font-medium`} onClick={onclick}>
      {children}
    </button>
  )
}

export default App