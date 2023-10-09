import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowCharacter, setAllowCharacter] = useState(false);

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(allowNumber) str += "0123456789";
    
    if(allowCharacter) str += " ~`!@#$%^&*()_-+={[}]|:;'<>,.?/"

    
    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass)

  }, [length, allowCharacter, allowNumber, setPassword]);

  useEffect(() => {
    passwordGenerator()
  }, [length, allowCharacter, allowNumber])

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-8 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3 text-4xl'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 py-4">
          <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3 rounded-md"
              placeholder="Password"
              readOnly
              ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-md ml-[-10px]' 
          >copy</button>
        </div>

        <div className='flex text-sm gap-x-5'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
              min={8}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={e => {setLength(e.target.value)}}
            />
            <label>Lenght: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={allowCharacter}
              id='characterInput'
              onChange={() => {setAllowCharacter(prev => !prev)}}
            />
            <label htmlFor="charrecterInput">Character</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={allowNumber}
              id='numberInput'
              onChange={() => {setAllowNumber(prev => !prev)}}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
