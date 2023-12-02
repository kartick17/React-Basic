import { useState } from "react";
import Item from './Item'

export default function List({ items, deleteItem, toggleItem, clearList }) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems = items;

  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))

  if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))

  return (
    <div className="flex justify-between flex-col bg-amber-900 text-white px-48 py-10">
      <ul className='grid grid-cols-item gap-4'>
        {
          sortedItems.map((item) => (
            <Item item={item} key={item.id} deleteItem={deleteItem} toggleItem={toggleItem} />
          ))
        }
      </ul>
      <div className='flex justify-center items-center gap-6'>
        <select className='text-stone-800 py-3 px-6 font-semibold text-base uppercase rounded-full w-72 outline-none' value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button className='bg-white text-stone-800 py-3 px-8 font-semibold uppercase text-base rounded-full' onClick={clearList}>Clear list</button>
      </div>
    </div>
  )
}