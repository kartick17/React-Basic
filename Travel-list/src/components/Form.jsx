import { useState } from "react";

export default function Form({ addNewItem }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() }
    addNewItem(newItem)

    setDescription('');
    setQuantity(1);
  }

  return (
    <form onSubmit={handleSubmit} className=" bg-orange-500 flex gap-4 items-center justify-center py-4">
      <h3 className=' text-amber-950 text-2xl font-semibold'>What do you need for your trip?</h3>
      <select className='py-3 px-7 rounded-full text-stone-700 font-semibold text-semibold outline-none' value={quantity} onChange={(e) => setQuantity(+(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map
          (num => (
            <option value={num} key={num}>{num}</option>
          ))}
      </select>
      <input type="text" placeholder='Items....' className='py-3 rounded-full px-6 text-stone-700 text-inherit outline-none font-semibold' value={description} onChange={(e) => setDescription(e.target.value)} />
      <button className='py-3 px-8 font-semibold bg-sky-400 uppercase rounded-full text-stone-800'>Add</button>
    </form>
  )
}