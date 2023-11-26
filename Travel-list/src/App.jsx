import './App.css'

function App() {
  return (
    <div className='app'>
      <Logo />
      <Form />
      <List />
      <Stats />
    </div>
  )
}

function Logo() {
  return <h1 className=" bg-orange-400 text-8xl uppercase tracking-tight gap-x-4 py-9 px-[30rem]">🏝️ Far Away 🧳</h1>;
}

function Form() {
  return <div className=" bg-orange-500 flex gap-4 items-center justify-center py-4">
    <h3 className=' text-stone-800 text-xl font-semibold'>What do you need for your trip?</h3>
    <select className='py-3 px-7 rounded-full'>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>
    <input type="text" placeholder='Items....' className='py-3 rounded-full px-6 text-stone-800' />
    <button className='py-3 px-8 bg-sky-400 uppercase rounded-full'>Add</button>
  </div>
}

function List() {
  return (
    <div className=" bg-amber-950 text-white">List</div>
  )
}

function Stats() {
  return <h3 className="bg-sky-300 text-stone-700 py-6 font-semibold italic text-xl px-[41rem]">You have 4 items on your list, and you already packed 2(50%)</h3>
}

export default App