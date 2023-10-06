import { useState } from 'react'

function App() {
  const [password, setPassword] = useState("");

  const [length, setLength] = useState(8);
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowCharacter, setAllowCharacter] = useState(false);

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600'>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly />

          <button className='px-3 outline-none bg-blue-700 text-white py-0.5 shrink-0'>
            copy
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
